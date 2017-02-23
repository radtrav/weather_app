import axios from 'axios';

const API_KEY = '473896f3dadfcd414de0d1f3752c1e14';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('request', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
