import axios from "axios";
const APIKey = "52da55a59ba2d34185ef4b9e9b0a93f2";

const Client = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

export async function getCurrentWeather({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) {
  const response = await Client(
    `/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
  );
  return response.data;
}
