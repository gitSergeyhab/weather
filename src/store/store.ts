import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { contentSlice } from './content-slice/content-slice';
import { dndSlice } from './dnd-slice/dnd-slice';
import { mapSlice } from './map-slice/map-slice';
import { citiesSlice } from './cities-slice/cities-slice';
import { citiesReducer } from './cities-reducer-api/cities-reducer-api';


export const reducer = combineReducers({
  [citiesSlice.name]: citiesSlice.reducer,
  [citiesReducer.reducerPath]: citiesReducer.reducer,
  [contentSlice.name]: contentSlice.reducer,
  [dndSlice.name]: dndSlice.reducer,
  [mapSlice.name]: mapSlice.reducer,

});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesReducer.middleware)
});

export type ReducerType = ReturnType<typeof reducer>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction< R, ReducerType, AxiosInstance, Action >;
