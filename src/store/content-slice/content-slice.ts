
import { createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "./cities-thunk";
import { ICityItem } from "../../types/city-types";
import { ICityWeather } from "../../types/weather-types";
import { fakeCityWeathers } from "../../fake/fake-city-weather";
import { CityWeatherPosition, DragArea, emptyCityWeather } from "../../const";
import { deleteEmptyWeatherCityFromList, insertEmptyWeatherCityToList } from "../../utils/reducer-utils";
// import { AxiosResponse } from "axios";

export interface InitialCitiesState {
  cities: ICityItem[],
  inputCityName?: string,
  cashCityTemperature: {[key: number]: number},
  weatherCityList: ICityWeather[],
  currentWeatherCity: ICityWeather|null,
  prevCityId: number|null,
  prevCityPosition: CityWeatherPosition,
  // cityWeatherPromise: Promise<AxiosResponse<WeatherType>>|null

};


const initialState: InitialCitiesState = {
  cities: [],
  cashCityTemperature: {},
  weatherCityList: fakeCityWeathers,
  currentWeatherCity: null,
  prevCityId: null,
  prevCityPosition: CityWeatherPosition.None,
  // cityWeatherPromise: null
};

interface SetWeatherCityListByDrag {
  dragCityId: number|null,
  dragArea: string,
  dragCityPosition: CityWeatherPosition
}

export const contentSlice = createSlice({
  name: 'citiesSlice',
  initialState,
  reducers: {

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
    setCurrentWeatherCity(state, {payload}: {payload: ICityWeather|null}) {
      state.currentWeatherCity = payload
    },

    setWeatherCityListByDrag(state, {payload}: {payload: SetWeatherCityListByDrag}) {
      const {dragArea, dragCityId, dragCityPosition} = payload;
      const {prevCityId, prevCityPosition, weatherCityList} = state;
      if (dragArea !== DragArea.Weather) {
        // если вне зоны DragArea.Weather - удалить пустой город
        console.log('// dragArea !== DragArea.Weather - удалить пустой город')
        state.weatherCityList = deleteEmptyWeatherCityFromList({originList: state.weatherCityList});
        state.prevCityId = null;
      } else if (DragArea.Weather === dragArea && dragCityId) {
        // если внутни контейнера и над городом - вставить перед

        console.log('// DragArea.Weather === dragArea && dragCityId - вставить город', {dragCityPosition})
        const newList = insertEmptyWeatherCityToList({
          originList: weatherCityList, dragCityId, dragCityPosition, prevCityId, prevCityPosition,
        })
        state.weatherCityList = newList;
        state.prevCityId = dragCityId;
        state.prevCityPosition = dragCityPosition as CityWeatherPosition
      } else if ((!dragCityId && DragArea.Weather === dragArea)) {
        console.log('// !dragCityId && DragArea.Weather === dragArea - добавить в конец')
        const noEmptyList = deleteEmptyWeatherCityFromList({originList: state.weatherCityList});
        noEmptyList.push(emptyCityWeather)
        state.weatherCityList = noEmptyList;
        state.prevCityId = null;
        state.prevCityPosition = CityWeatherPosition.None;
      }
    },
    // setCityWeatherPromise(city: ICityItem) {

    // }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload || []
      })
  },
})

export const {
  addCashCityTemperature,
  setCurrentWeatherCity,
  addWeatherCity,
  setWeatherCityListByDrag
  } = contentSlice.actions;

