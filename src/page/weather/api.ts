import axios from "axios";
const APIKey = "b32051a84715aa308a114834ba335c28";

const Client = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
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
