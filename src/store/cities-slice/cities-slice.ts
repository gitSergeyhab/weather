
import {
  // PayloadAction,
  createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "./cities-thunk";
import { ICityItem } from "../../types/city-types";
import { SimpleDict } from "../../types/common-types";

export interface InitialCitiesState {
  cities: ICityItem[],
  currentCityName?: string,
  cashCityTemperature: SimpleDict
};


const initialState: InitialCitiesState = {
  cities: [],
  cashCityTemperature: {}
};

export const citiesSlice = createSlice({
  name: 'citiesSlice',
  initialState,
  reducers: {
    setCurrentCityName(state, {payload}) {
      state.currentCityName = payload;
    },
    addCashCityTemperature(state, {payload}) {
      const {cityId, temperature} = payload;
      state.cashCityTemperature[cityId] = temperature;
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload || []
      })

  },
})

export const { setCurrentCityName } = citiesSlice.actions;
