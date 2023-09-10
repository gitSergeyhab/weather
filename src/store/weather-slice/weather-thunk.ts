import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ICityItem } from "../../types/city-types";
import { adaptWeatherToClientWithCity } from "../../utils/adapters";
import { openWeatherApi } from "../../api/open-weather-api";
import { WeatherType } from "../../types/weather-types";
import { addWeatherCityToList } from "./weather-slice";


export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: ICityItem, {dispatch}) => {
    try {
      const {lon, lat} = city;
      const {data} = await openWeatherApi.get<WeatherType> (`/weather`, { params: { lat, lon } });
      const cityWeather = adaptWeatherToClientWithCity(data, city)
      console.log({cityWeather}, 'result');
      return dispatch(addWeatherCityToList(cityWeather))
    } catch (err) {
      console.log({err})
      toast.error('невозможно загрузить данные. попробуйте позже')
      return null;
    }
  }
)

