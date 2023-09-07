import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { citiesSlice } from './cities-slice/cities-slice';
import { sortFilterSlice } from './sort-filter-slice/sort-filter-slice';


export const reducer = combineReducers({
  [citiesSlice.name]: citiesSlice.reducer,
  [sortFilterSlice.name]: sortFilterSlice.reducer

});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()

});

export type ReducerType = ReturnType<typeof reducer>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction< R, ReducerType, AxiosInstance, Action >;
