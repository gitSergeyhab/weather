
import { createSlice } from "@reduxjs/toolkit";
// import { fetchCities } from "./cities-thunk";
// import { ICityItem } from "../../types/city-types";


export interface InitialCitiesState {
  // cities: ICityItem[],
  inputCityPrefix: string,
  cashCityTemperature: {[key: number]: number},
  sortChecked: 'down'|'up',
};

const initialState: InitialCitiesState = {
  // cities: [],
  inputCityPrefix: '',
  cashCityTemperature: {},
  sortChecked: 'up',

};

export const citiesSlice = createSlice({
  name: 'citiesSlice',
  initialState,
  reducers: {

    addCashCityTemperature(state, {payload}:{payload: {cityId: number, temperature: number}}) {
      const {cityId, temperature} = payload;
      state.cashCityTemperature[cityId] = temperature;
    },
    setSortChecked(state, {payload}) {
      state.sortChecked = payload;
    },
    setInputCityPrefix(state, {payload}) {
      state.inputCityPrefix = payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchCities.fulfilled, (state, action) => {
  //       state.cities = action.payload || []
  //     })
  // },
})

export const {
  addCashCityTemperature,
  setSortChecked,
  setInputCityPrefix
  } = citiesSlice.actions;

