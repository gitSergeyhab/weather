import { createSlice } from "@reduxjs/toolkit"
import { ICityWeather, IForecast } from "../../types/weather-types";
import { fetchForecast } from "./weather-thunk";

const DEFAULT_CENTER = [55.755833333, 37.617777777]

interface MapInitialState {
  center: number[];
  portalWeather: ICityWeather|null;
  weatherForecastList: IForecast[],
  isForecastLoading: boolean;
  mapWeatherCityList: ICityWeather[],
}

const initialState: MapInitialState = {
  center: DEFAULT_CENTER,
  portalWeather: null,
  weatherForecastList: [],
  isForecastLoading: true,
  mapWeatherCityList: []
}


export const mapSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setCenter(state, {payload} : {payload: number[]}) {
      state.center = payload;
    },
    setPortalWeather(state, {payload} : {payload: ICityWeather|null}) {
      state.portalWeather = payload;
    },
    setWeatherForecastList(state, {payload}: {payload: IForecast[]}) {
      state.weatherForecastList = payload;
    },
    setMapWeatherCityList(state, {payload} : {payload: ICityWeather[]}) {
      state.mapWeatherCityList = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.fulfilled, (state) => {
        state.isForecastLoading = false;
      })
      .addCase(fetchForecast.rejected, (state) => {
        state.isForecastLoading = false;
      })
      .addCase(fetchForecast.pending, (state) => {
        state.isForecastLoading = true;
      })
  }
})

export const {
  setCenter,
  setPortalWeather,
  setWeatherForecastList,
  setMapWeatherCityList
} = mapSlice.actions
