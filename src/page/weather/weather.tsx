import React, { useState } from 'react';
import { getCurrentWeather } from "../weather/api";
import { City, WeatherData } from '../../type/typeData';

const cities = [
  { id: 1, name: 'tehran', lat: '35.7219', lon: '51.3347' },
  { id: 2, name: 'ahvaz', lat: '31.3183', lon: '48.6706' },
  { id: 3, name: 'yazd', lat: '31.8974', lon: '54.3569' }
];

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    const selectedLocation: City = JSON.parse(value);
    getCurrentWeather({ lat: selectedLocation.lat, lon: selectedLocation.lon })
      .then((data) => setWeatherData(data));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-700 text-white">
      <div className="mb-5 text-center">
        <h1 className="text-4xl mb-4">Weather App</h1>
      </div>
      <div className="w-1/2 mb-5">
        <select
          onChange={handleChange}
          className="w-full p-2 bg-slate-500 text-white rounded border border-gray-600"
        >
          {cities.map((item) => (
            <option key={item.id} value={JSON.stringify(item)}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      {weatherData && (
        <div className="grid grid-cols-2 gap-10 text-center mt-14">
          <div>Pressure: {weatherData.main.pressure}</div>
          <div>Temperature: {weatherData.main.temp}</div>
          <div>Wind Speed: {weatherData.wind.speed}</div>
          <div>Wind Direction: {weatherData.wind.deg}</div>
        </div>
      )}
    </div>
  );
}
