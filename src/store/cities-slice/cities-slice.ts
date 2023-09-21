
import { createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "./cities-thunk";
import { ICityItem } from "../../types/city-types";
import { CitySort } from "../../const/const";


export interface InitialCitiesState {
  cities: ICityItem[],
  cashCityTemperature: {[key: number]: number},
  sortChecked: 'down'|'up',
  citySort: CitySort
};

const initialState: InitialCitiesState = {
  cities: [],
  cashCityTemperature: {},
  sortChecked: 'up',
  citySort: CitySort.NameReverse,

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
      state.citySort = payload === 'down' ? CitySort.Name : CitySort.NameReverse;
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
  addCashCityTemperature,
  setSortChecked
  } = citiesSlice.actions;

