import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ICityItem } from "../../types/city-types";
import { adaptWeatherToClientWithCity } from "../../utils/adapters";
import { openWeatherApi } from "../../api/open-weather-api";
import { WeatherType } from "../../types/weather-types";
import { addCashCityTemperature, setCurrentWeatherCity } from "./content-slice";
import { round1 } from "../../utils/utils";


export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: ICityItem, {dispatch}) => {
    try {
      dispatch(setCurrentWeatherCity(null));
      const {lon, lat} = city;
      const {data} = await openWeatherApi.get<WeatherType> (`/weather`, { params: { lat, lon } });
      const cityWeather = adaptWeatherToClientWithCity(data, city);
      dispatch(addCashCityTemperature({cityId: cityWeather.cityId, temperature: cityWeather.temp}))
      dispatch(setCurrentWeatherCity(cityWeather));
    } catch (err) {
      console.log({err})
      toast.error('невозможно загрузить данные. попробуйте позже');
    }
  }
)

