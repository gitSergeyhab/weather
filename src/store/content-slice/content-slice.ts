
import { createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "./cities-thunk";
import { ICityItem } from "../../types/city-types";
import { ICityWeather } from "../../types/weather-types";
import { fakeCityWeathers } from "../../fake/fake-city-weather";
import { emptyCityWeather } from "../../const";
import { deleteEmptyWeatherCityFromList, insertEmptyWeatherCityToList } from "../../utils/reducer-utils";
import { DragArea } from "./content-slice copy";

export interface InitialCitiesState {
  cities: ICityItem[],
  inputCityName?: string,
  cashCityTemperature: {[key: number]: number},
  weatherCityList: ICityWeather[],
  currentWeatherCity: ICityWeather|null,
  underEmptyWeatherCityId: number|null,
};


const initialState: InitialCitiesState = {
  cities: [],
  cashCityTemperature: {},
  weatherCityList: fakeCityWeathers,
  currentWeatherCity: null,
  underEmptyWeatherCityId: null
};

interface SetWeatherCityListByDrag {
  cityWeatherOverId: number|null,
  dragArea: string,
  dragCardPosition: string
  // isInWeatherContainer: boolean
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


    pushEmptyWeatherCity(state){
      state.weatherCityList.push(emptyCityWeather)
    },

    // addEmptyWeatherCity(state, {payload}: {payload: number}){
    //   const newList = insertEmptyWeatherCityToList({originList: state.weatherCityList, cityId: payload})
    //   state.weatherCityList = newList;
    // },

    deleteEmptyWeatherCity(state){
      const newList = deleteEmptyWeatherCityFromList({originList: state.weatherCityList})
      state.weatherCityList = newList;
    },

    setWeatherCityListByDrag(state, {payload}: {payload: SetWeatherCityListByDrag}) {
      const {dragArea, cityWeatherOverId, dragCardPosition} = payload;
      const {underEmptyWeatherCityId} = state;
      if (dragArea !== DragArea.Weather) {
        // если вне зоны DragArea.Weather - удалить пустой город
        console.log('// если вне зоны DragArea.Weather - удалить пустой город')
        state.weatherCityList = deleteEmptyWeatherCityFromList({originList: state.weatherCityList});
        state.underEmptyWeatherCityId = null;
      } else if (DragArea.Weather === dragArea && cityWeatherOverId) {
        // если внутни контейнера и над городом - вставить перед

        console.log('// если в зоне DragArea.Weather - вставить город', {dragCardPosition})
        const newList = insertEmptyWeatherCityToList({
          originList: state.weatherCityList,
          cityId: cityWeatherOverId,
          underEmptyWeatherCityId,
          position: dragCardPosition
        })
        state.weatherCityList = newList;
        state.underEmptyWeatherCityId = cityWeatherOverId;
      } else if ((!underEmptyWeatherCityId && DragArea.Weather === dragArea)) {
        // если вне контейнера и внутри зоны DragArea.Weather- добавить в конец
        console.log('// если вне контейнера и внутри зоны DragArea.Weather- добавить в конец')
        const noEmptyList = deleteEmptyWeatherCityFromList({originList: state.weatherCityList});
        noEmptyList.push(emptyCityWeather)
        state.weatherCityList = noEmptyList;
        state.underEmptyWeatherCityId = null;
      }
    }
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
  // addEmptyWeatherCity,
  deleteEmptyWeatherCity,
  pushEmptyWeatherCity,
  setWeatherCityListByDrag
  } = contentSlice.actions;

