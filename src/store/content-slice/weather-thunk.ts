import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ICityItem } from "../../types/city-types";
import { adaptWeatherToClientWithCity } from "../../utils/adapters";
import { openWeatherApi } from "../../api/open-weather-api";
import { WeatherType } from "../../types/weather-types";
import { addCashCityTemperature, setCurrentWeatherCity, setWeatherCityByIndex, setWeatherCityToEmptySlot } from "./content-slice";
import { getWeatherCitiesFromLS } from "../../utils/storage-utils";


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

export const refetchWeather = createAsyncThunk(
  'weather/refetchWeather',
  async (city: ICityItem, {dispatch}) => {
    try {
      const {lon, lat} = city;
      const {data} = await openWeatherApi.get<WeatherType> (`/weather`, { params: { lat, lon } });
      const cityWeather = adaptWeatherToClientWithCity(data, city);
      dispatch(addCashCityTemperature({cityId: cityWeather.cityId, temperature: cityWeather.temp}))
      dispatch(setCurrentWeatherCity(cityWeather));
      dispatch(setWeatherCityToEmptySlot())
    } catch (err) {
      console.log({err})
      toast.error('невозможно загрузить данные. попробуйте позже');
    }
  }
)

export const fetchWeatherList = createAsyncThunk(
  'weather/fetchWeatherList',
  async (_nothing: undefined, {dispatch}) => {
    try {
      const list = getWeatherCitiesFromLS();
      list.forEach((item, index) => {
        const {cityId, cityName, coordinates, countryName} = item;
        const [lon, lat ]= coordinates;
        const city = {id: cityId, cityName, countryName, lat, lon }
        openWeatherApi.get<WeatherType> (`/weather`, { params: { lat, lon } })
          .then(({data}) => {
            const cityWeather = adaptWeatherToClientWithCity(data, city);
            dispatch(addCashCityTemperature({cityId: cityWeather.cityId, temperature: cityWeather.temp}))
            dispatch(setWeatherCityByIndex({index, weather: cityWeather}))
          })
          .catch((err) => {
            console.log({err})
            toast.error('невозможно загрузить данные. попробуйте позже');
          });
      })

    } catch (err) {
      console.log({err})
      toast.error('невозможно загрузить данные. попробуйте позже');
    }
  }
)
