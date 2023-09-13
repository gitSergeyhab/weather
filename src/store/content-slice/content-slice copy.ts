
import {
  // PayloadAction,
  createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "./cities-thunk";
import { ICityItem } from "../../types/city-types";
import { SimpleDict } from "../../types/common-types";
import { ICityWeather } from "../../types/weather-types";

export const enum DragArea {
  Cities = 'cities',
  Weather = 'weather',
  None = 'none'
}
const emptyCityWeather:ICityWeather = {
  cityId: -1,
  cityName: '',
  conditions: [],
  countryName: '',
  direction: '',
  id: -1,
  temp: -1000,
  windSpeed: ''
}

export interface InitialCitiesState {
  cities: ICityItem[],
  inputCityName?: string,
  cashCityTemperature: {[key: number]: number},
  weatherCityList: ICityWeather[],
  currentWeatherCity: ICityWeather|null,
  cityWeatherDragOverId: number|null,
  dragArea: DragArea
};


const initialState: InitialCitiesState = {
  cities: [],
  cashCityTemperature: {},
  weatherCityList: [] ,
  dragArea: DragArea.None,
  currentWeatherCity: null,
  cityWeatherDragOverId: null
};

export const contentSlice = createSlice({
  name: 'citiesSlice',
  initialState,
  reducers: {
    setCurrentCityName(state, {payload}) {
      state.inputCityName = payload;
    },
    addCashCityTemperature(state, {payload}:{payload: {cityId: number, temperature: number}}) {
      const {cityId, temperature} = payload;
      state.cashCityTemperature[cityId] = temperature;
    },
    addWeatherCity(state) {
        const {currentWeatherCity} = state;
        if (currentWeatherCity) {
          state.weatherCityList.push(currentWeatherCity);
        }

    },
    addEmptyWeatherCity(state) {
      const {currentWeatherCity, cityWeatherDragOverId, weatherCityList} = state;
      if (currentWeatherCity && cityWeatherDragOverId && weatherCityList.length ) {
        const index = weatherCityList.findIndex((item) => item.cityId === cityWeatherDragOverId);
        if (index !== -1) {
          console.log({weatherCityList})
          const newWeatherCityList = [...weatherCityList.slice(0,index), emptyCityWeather, ...weatherCityList.slice(index)];
          console.log({newWeatherCityList})
          state.weatherCityList = newWeatherCityList;
        };
      }
  },
    addWeatherCityBefore(state) {
      const {currentWeatherCity} = state;
      console.log('{currentWeatherCity}')
      if (currentWeatherCity) {
        console.log({currentWeatherCity})
        state.weatherCityList.push(currentWeatherCity);
      }
  },
    setCurrentWeatherCity(state, {payload}: {payload: ICityWeather|null}) {
      state.currentWeatherCity = payload
    },

    setCityWeatherDragOverId(state, {payload}: {payload: number|null}) {
      state.cityWeatherDragOverId = payload;
    },

    addEmptyCityWeather(state, {payload}: {payload: number|null}) {
      const {currentWeatherCity, weatherCityList} = state;
      if (currentWeatherCity && payload && weatherCityList.length ) {
        const index = weatherCityList.findIndex((item) => item.cityId === payload);
        const emptyIndex = weatherCityList.findIndex((item) => item.cityId === -1);
        if (index !== -1 && emptyIndex === -1) {
          console.log({weatherCityList})
          const newWeatherCityList = [...weatherCityList.slice(0,index), emptyCityWeather, ...weatherCityList.slice(index)];
          console.log({newWeatherCityList})
          state.weatherCityList = newWeatherCityList;
        };
      }
    },

    deleteEmptyCityWeather(state) {
      const {weatherCityList} = state;
      const index = weatherCityList.findIndex((item) => item.cityId === -1);

        if (index !== -1) {
          console.log({weatherCityList})
          const newWeatherCityList = [...weatherCityList.slice(0,index), ...weatherCityList.slice(index+1)];
          console.log({newWeatherCityList})
          state.weatherCityList = newWeatherCityList;
        };
    },
    setDragArea(state, {payload}) {
      console.log({payload})
      state.dragArea = payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload || []
      })
  },
})

export const {
  setCurrentCityName,
  addCashCityTemperature,
  setCurrentWeatherCity,
  addWeatherCity,
  setCityWeatherDragOverId,
  setDragArea,
  // addEmptyWeatherCity,
  addEmptyCityWeather,
  deleteEmptyCityWeather
  } = contentSlice.actions;

