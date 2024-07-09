import React, { useState } from 'react';
import { getCurrentWeather } from "../weather/api"
import { City, WeatherData } from '../../type/typeData';
/////////////////////////////////////////////////////////////////////
const cities = [
  { id: 1, name: 'tehran', lat: '35.7219°', lon: '51.3347°' },
  { id: 2, name: 'ahvaz', lat: '31.3183°', lon: '48.6706°' },
  { id: 3, name: 'yazd', lat: '31.8974°', lon: '54.3569°' }
]
//////////////////////////////////////////////////////////////////////////
export default function weather() {
  const [weatherData, setWeatherData] = useState<WeatherData>()
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedLocation: City = JSON.parse(value);
    getCurrentWeather({ lat: selectedLocation.lat, lon: selectedLocation.lon })
      .then((data) =>
        setWeatherData(data)
      )

  }
  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', color: '#333' }}>Weather App</h1>
        <h3>pressure:{weatherData?.main.pressure}</h3>
        <h3>temp:{weatherData?.main.temp}</h3>
        <h3>wind speed:{weatherData?.wind.deg}</h3>
      </div>
      <div style={{ textAlign: 'center' }}>
        <select onChange={handleChange}
          style={{
            padding: '8px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            outline: 'none'
          }}>
          {cities.map((item) => (
            <option key={item.id}
              value={JSON.stringify(item)}>{item.name}</option>
          ))}
        </select>
      </div>
    </>

  )
}
