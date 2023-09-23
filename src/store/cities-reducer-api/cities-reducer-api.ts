import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICityItem } from '../../types/city-types';
import { adaptServerCitiesDataToCities } from '../../utils/adapters';
import { CitySort } from '../../const/const';
import { GEO_DB_API_HOST, GEO_DB_API_URL, MIN_CITY_POPULATION } from '../../const/api-settings';


export const citiesReducer = createApi({
  reducerPath: 'citiesReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: GEO_DB_API_URL,
    timeout: 5000,
    headers: {
      'X-RapidAPI-Key': process.env.GEO_DB_API_KEY || '',
      'X-RapidAPI-Host': GEO_DB_API_HOST
    }
  }),
  endpoints: (build) => ({
    getCities: build.query<ICityItem[], {namePrefix: string, sortDirection: 'down'|'up'}>({
      query: ({namePrefix, sortDirection}) => ({
        url: `/cities`,
        method: 'GET',
        params: {
          minPopulation: MIN_CITY_POPULATION,
          types: 'city',
          limit: 10,
          languageCode: 'RU',
          namePrefix,
          sort: sortDirection === 'down' ?  CitySort.Name : CitySort.NameReverse}
      }),
      transformResponse: adaptServerCitiesDataToCities,
    })
  })
})

export const {useGetCitiesQuery} = citiesReducer;
