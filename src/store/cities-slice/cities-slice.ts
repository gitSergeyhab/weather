
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCities } from "./cities-thunk";
import { ICityItem } from "../../types/city-types";

export interface InitialCitiesState {
  cities: ICityItem[],
  currentCityName?: string
};




const initialState: InitialCitiesState = {
  cities: []
};

export const citiesSlice = createSlice({
  name: 'cities-slice',
  initialState,
  reducers: {
    setCurrentCityName(state, {payload}) {
      state.currentCityName = payload;
    },
    // setInputCommentType(state, action: PayloadAction<CommentType>) {
    //   state.inputCommentType = action.payload;
    // },
    // setInputCommentId(state, action: PayloadAction<string>) {
    //   state.inputCommentId = action.payload;
    // },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.cities = action.payload || []
      })

  },
})

export const { setCurrentCityName } = citiesSlice.actions;
