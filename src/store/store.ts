import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { sortFilterSlice } from './sort-filter-slice/sort-filter-slice';
import { contentSlice } from './content-slice/content-slice';
import { dndSlice } from './dnd-slice/dnd-slice';
import { mapSlice } from './map-slice/map-slice';


export const reducer = combineReducers({
  [contentSlice.name]: contentSlice.reducer,
  [dndSlice.name]: dndSlice.reducer,
  [sortFilterSlice.name]: sortFilterSlice.reducer,
  [mapSlice.name]: mapSlice.reducer
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type ReducerType = ReturnType<typeof reducer>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction< R, ReducerType, AxiosInstance, Action >;
