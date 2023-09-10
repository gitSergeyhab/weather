
import {
  // PayloadAction,
  createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weather-thunk";
import { ICityWeather } from "../../types/weather-types";

export interface InitialWeatherState {
  weatherCityList: ICityWeather[],
  currentWeatherCity?: ICityWeather
};


const initialState: InitialWeatherState = {
  weatherCityList: [],
};

export const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    // setCurrentWeatherCity(state, {payload}) {
    //   state.currentWeatherCity = payload;
    // }

    addWeatherCityToList(state, {payload}) {
      state.weatherCityList.push(payload);
    }
  },
  extraReducers: (builder) => {
    // builder
      // .addCase(fetchWeather.fulfilled, (state, action) => {
      //   state.currentWeatherCity = action.payload
      // })

  },
})

export const { addWeatherCityToList } = weatherSlice.actions;
