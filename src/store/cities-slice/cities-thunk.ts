import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { CityResponseData } from "../../types/city-types";
import { MIN_CITY_POPULATION } from "../../const";
import { adaptServerCityToCityItem } from "../../utils/adapters";
import { geoDbApi } from "../../api/geo-db-cities-api";


type FetchCities = {
  value: string,

}

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async ({ value }: FetchCities) => {
    console.log('123')
    try {
      const result = await geoDbApi.get<CityResponseData> (`/cities`, { params:
        {
          minPopulation: MIN_CITY_POPULATION,
          sort: '-population',
          types: 'city',
          namePrefix: value,
          limit: 10,
          languageCode: 'RU'
        }
      })

      const adaptedCities = result.data.data.map(adaptServerCityToCityItem);
      console.log({adaptedCities})
      return adaptedCities;
    } catch (err) {
      console.log({err})
      toast.error('невозможно загрузить данные. попробуйте позже')
      return null;
    }
  }
)

