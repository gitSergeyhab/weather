import axios from 'axios';
import { OPEN_WEATHER_API_KEY, OPEN_WEATHER_API_URL } from '../const';




export const createWeatherApi = () => {
  const api = axios.create({
    baseURL: OPEN_WEATHER_API_URL,
    // headers: {
    //   'X-RapidAPI-Key': OPEN_WEATHER_API_KEY,
    //   'X-RapidAPI-Host': GEO_DB_API_HOST
    // },
    params: {
      appid: OPEN_WEATHER_API_KEY

    }
  })

  return api;
}


export const openWeatherApi = createWeatherApi();
