import { createSlice } from "@reduxjs/toolkit"
import { ICityWeather, IForecast } from "../../types/weather-types";

const DEFAULT_CENTER = [55.755833333, 37.617777777]

interface MapInitialState {
  center: number[];
  portalWeather: ICityWeather|null;
  weatherForecastList: IForecast[],
}

const initialState: MapInitialState = {
  center: DEFAULT_CENTER,
  portalWeather: null,
  weatherForecastList: []
}


export const mapSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setCenter(state, {payload} : {payload: number[]}) {
      state.center = payload;
    },
    setPortalWeather(state, {payload} : {payload: ICityWeather|null}) {
      console.log('setPortalWeather', {payload})
      state.portalWeather = payload;
    },
    setWeatherForecastList(state, {payload}: {payload: IForecast[]}) {
      state.weatherForecastList = payload;
    }
  }
})

export const {setCenter, setPortalWeather, setWeatherForecastList} = mapSlice.actions
