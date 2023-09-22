import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { CityResponseData } from "../../types/city-types";
import { CitySort } from "../../const/const";
import { adaptServerCityToCityItem } from "../../utils/adapters";
import { geoDbApi } from "../../api/geo-db-cities-api";
import { getUniqueCities } from "../../utils/get-unique-cities";


type FetchCities = {
  value: string,
  sortChecked: 'down'|'up'
}

export const fetchCities = createAsyncThunk(
  'cities/fetchCities',
  async ({ value, sortChecked }: FetchCities) => {
    try {
      const sort = sortChecked === 'down' ? CitySort.Name : CitySort.NameReverse;
      const result = await geoDbApi.get<CityResponseData> (`/cities`, {
        params: { sort, namePrefix: value }
      })
      const uniqueCities = getUniqueCities(result.data.data)
      console.log({uniqueCities, result})
      const adaptedCities = uniqueCities.map(adaptServerCityToCityItem);
      return adaptedCities;
    } catch (err) {
      console.log({err})
      toast.error('невозможно загрузить данные. попробуйте позже')
      return null;
    }
  }
)

