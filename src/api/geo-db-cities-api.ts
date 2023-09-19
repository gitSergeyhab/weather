import axios from 'axios';
import { GEO_DB_API_HOST, GEO_DB_API_KEY, GEO_DB_API_URL, MIN_CITY_POPULATION } from '../const/api-settings';


export const createGeoDbApi = () => {
  const api = axios.create({
    baseURL: GEO_DB_API_URL,
    headers: {
      'X-RapidAPI-Key': GEO_DB_API_KEY,
      'X-RapidAPI-Host': GEO_DB_API_HOST
    },
    params: {
      minPopulation: MIN_CITY_POPULATION,
      types: 'city',
      limit: 10,
      languageCode: 'RU'
    }
  })
  return api;
}

export const geoDbApi = createGeoDbApi();
