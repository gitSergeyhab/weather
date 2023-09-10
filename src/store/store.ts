import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { citiesSlice } from './cities-slice/cities-slice';
import { sortFilterSlice } from './sort-filter-slice/sort-filter-slice';
import { weatherSlice } from './weather-slice/weather-slice';


export const reducer = combineReducers({
  [citiesSlice.name]: citiesSlice.reducer,
  [weatherSlice.name]: weatherSlice.reducer,
  [sortFilterSlice.name]: sortFilterSlice.reducer

});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type ReducerType = ReturnType<typeof reducer>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction< R, ReducerType, AxiosInstance, Action >;
