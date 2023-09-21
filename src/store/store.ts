import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { contentSlice } from './content-slice/content-slice';
import { dndSlice } from './dnd-slice/dnd-slice';
import { mapSlice } from './map-slice/map-slice';
import { citiesSlice } from './cities-slice/cities-slice';


export const reducer = combineReducers({
  [citiesSlice.name]: citiesSlice.reducer,
  [contentSlice.name]: contentSlice.reducer,
  [dndSlice.name]: dndSlice.reducer,
  [mapSlice.name]: mapSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type ReducerType = ReturnType<typeof reducer>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction< R, ReducerType, AxiosInstance, Action >;
