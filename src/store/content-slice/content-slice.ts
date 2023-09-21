
import { createSlice } from "@reduxjs/toolkit";
import { ICityWeather } from "../../types/weather-types";
import { CityWeatherPosition, DragArea, emptyCityWeather } from "../../const/const";
import { deleteEmptyWeatherCityFromList, insertEmptyWeatherCityToList, insertWeatherCityToEmptySlot, removeWeatherCityFromList, replaceWeatherCityToEmptySlot } from "../../utils/reducer-utils";
import { refetchWeather } from "./weather-thunk";

export interface InitialCitiesState {
  weatherCityList: ICityWeather[],
  currentWeatherCity: ICityWeather|null,
  prevCityId: number|null,
  prevCityPosition: CityWeatherPosition,
  isCurrentWeatherCityLoading: boolean
  filterChecked: string[],
};

const initialState: InitialCitiesState = {
  weatherCityList: [],
  currentWeatherCity: null,
  prevCityId: null,
  prevCityPosition: CityWeatherPosition.None,
  isCurrentWeatherCityLoading: false,
  filterChecked: []
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
    setFilterChecked(state, {payload}) {
      const filters = state.filterChecked;
      const index = filters.findIndex((item) => item === payload);
      if (index === -1) {
        state.filterChecked = [...filters, payload];
      } else {
        state.filterChecked = [...filters.slice(0, index), ...filters.slice(index+1)];
      }
    },
  },

  extraReducers: (builder) => {
    builder
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
  setCurrentWeatherCity,
  setWeatherCityListByDrag,
  setWeatherCityToEmptySlot,
  resetWeatherCityToEmptySlot,
  deleteWeatherCityFromList,
  setDefaultWeatherCities,
  setWeatherCityByIndex,
  setFilterChecked
  } = contentSlice.actions;

