export interface Typedata {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  time: number;
  athor: string;
}

export interface City {
  id: number;
  name: string;
  lat: string;
  lon: string;
}
export interface WeatherData {
  weather: Weather;
  main: Main;
  wind: Wind;
}
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
