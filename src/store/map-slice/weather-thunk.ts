import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { adaptForecastToClient } from "../../utils/adapters";
import { openWeatherApi } from "../../api/open-weather-api";
import { ForecastDate } from "../../types/weather-types";
import { setWeatherForecastList } from "./map-slice";


export const fetchForecast = createAsyncThunk(
  'weather/fetchForecast',
  async (coordinates: {lat: number, lon: number}, {dispatch}) => {
    try {
      dispatch(setWeatherForecastList([]));
      const {lon, lat} = coordinates;
      const {data} = await openWeatherApi.get<ForecastDate> (`/forecast`, { params: { lat, lon } });
      const forecastList = data.list.map(adaptForecastToClient);
      dispatch(setWeatherForecastList(forecastList));
    } catch (err) {
      console.log({err})
      toast.error('невозможно загрузить данные. попробуйте позже');
    }
  }
)

