import axios from 'axios';
import { OPEN_WEATHER_API_URL } from '../const/api-settings';

export const createWeatherApi = () => {
  const api = axios.create({
    baseURL: OPEN_WEATHER_API_URL,
    params: {
      appid: process.env.OPEN_WEATHER_API_KEY,
      units: 'metric',
      lang: 'ru'
    }
  })

  return api;
}

export const openWeatherApi = createWeatherApi();
