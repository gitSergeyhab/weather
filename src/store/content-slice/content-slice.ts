
import { createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "./cities-thunk";
import { ICityItem } from "../../types/city-types";
import { ICityWeather } from "../../types/weather-types";
import { CityWeatherPosition, DragArea, emptyCityWeather } from "../../const/const";
import { deleteEmptyWeatherCityFromList, insertEmptyWeatherCityToList, insertWeatherCityToEmptySlot, removeWeatherCityFromList, replaceWeatherCityToEmptySlot } from "../../utils/reducer-utils";
import { refetchWeather } from "./weather-thunk";

export interface InitialCitiesState {
  cities: ICityItem[],
  inputCityName?: string,
  cashCityTemperature: {[key: number]: number},
  weatherCityList: ICityWeather[],
  currentWeatherCity: ICityWeather|null,
  prevCityId: number|null,
  prevCityPosition: CityWeatherPosition,
  isCurrentWeatherCityLoading: boolean
};

const initialState: InitialCitiesState = {
  cities: [],
  cashCityTemperature: {},
  weatherCityList: [],
  currentWeatherCity: null,
  prevCityId: null,
  prevCityPosition: CityWeatherPosition.None,
  isCurrentWeatherCityLoading: false
};

interface SetWeatherCityListByDrag {
  dragCityId: number|null,
  dragArea: string,
  dragCityPosition: CityWeatherPosition
}

export const contentSlice = createSlice({
  name: 'contentSlice',
  initialState,
  reducers: {

    addCashCityTemperature(state, {payload}:{payload: {cityId: number, temperature: number}}) {
      const {cityId, temperature} = payload;
      state.cashCityTemperature[cityId] = temperature;
    },
    setCurrentWeatherCity(state, {payload}: {payload: ICityWeather|null}) {
      state.currentWeatherCity = payload
    },

    setDefaultWeatherCities(state, {payload}: {payload: ICityWeather[]}){
      state.weatherCityList = payload;
    },
    setWeatherCityByIndex(state, {payload}: {payload: {weather: ICityWeather, index: number}}){
      state.weatherCityList[payload.index] = payload.weather
    },

    setWeatherCityListByDrag(state, {payload}: {payload: SetWeatherCityListByDrag}) {
      const {dragArea, dragCityId, dragCityPosition} = payload;
      const {prevCityId, prevCityPosition, weatherCityList} = state;
      if (dragArea !== DragArea.Weather) {
        // если вне зоны DragArea.Weather - удалить пустой город
        state.weatherCityList = deleteEmptyWeatherCityFromList({originList: state.weatherCityList});
        state.prevCityId = null;
      } else if (DragArea.Weather === dragArea && dragCityId) {
        // если внутни контейнера и над городом - вставить перед

        const newList = insertEmptyWeatherCityToList({
          originList: weatherCityList, dragCityId, dragCityPosition, prevCityId, prevCityPosition,
        })
        state.weatherCityList = newList;
        state.prevCityId = dragCityId;
        state.prevCityPosition = dragCityPosition as CityWeatherPosition
      } else if ((!dragCityId && DragArea.Weather === dragArea)) {
        const noEmptyList = deleteEmptyWeatherCityFromList({originList: state.weatherCityList});
        noEmptyList.push(emptyCityWeather)
        state.weatherCityList = noEmptyList;
        state.prevCityId = null;
        state.prevCityPosition = CityWeatherPosition.None;
      }
    },

    setWeatherCityToEmptySlot(state) {
      const {weatherCityList, currentWeatherCity} = state;
      const newList  = insertWeatherCityToEmptySlot({cityWeather: currentWeatherCity, originList: weatherCityList});
      state.weatherCityList = newList;
      state.prevCityId = null;
      state.prevCityPosition = CityWeatherPosition.None;
    },

    resetWeatherCityToEmptySlot(state) {
      const {weatherCityList, currentWeatherCity} = state;
      const newList = replaceWeatherCityToEmptySlot({cityWeather: currentWeatherCity, originList: weatherCityList});
      state.weatherCityList = newList;
      state.prevCityId = null;
      state.prevCityPosition = CityWeatherPosition.None;
    },

    deleteWeatherCityFromList(state) {
      const {weatherCityList, currentWeatherCity} = state;
      const newList = removeWeatherCityFromList({cityWeather: currentWeatherCity, originList: weatherCityList});
      state.weatherCityList = newList;
      state.prevCityId = null;
      state.prevCityPosition = CityWeatherPosition.None;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload || []
      })
      .addCase(refetchWeather.fulfilled, (state) => {
        state.isCurrentWeatherCityLoading = false;
      })
      .addCase(refetchWeather.rejected, (state) => {
        state.isCurrentWeatherCityLoading = false;
      })
      .addCase(refetchWeather.pending, (state) => {
        state.isCurrentWeatherCityLoading = true;
      })
  },
})

export const {
  addCashCityTemperature,
  setCurrentWeatherCity,
  setWeatherCityListByDrag,
  setWeatherCityToEmptySlot,
  resetWeatherCityToEmptySlot,
  deleteWeatherCityFromList,
  setDefaultWeatherCities,
  setWeatherCityByIndex
  } = contentSlice.actions;

