import { createAction } from '@reduxjs/toolkit';
import { ICityItem } from '../types/city-types';

export const enum ActionType {
  SetCitiesList = 'city/SetCitiesList',
  SetUserCitiesList = 'user/SetUserCitiesList',
  SetTemperatureByCityId = 'temperature/SetTemperatureByCityId',
}

export const setCitiesList = createAction(ActionType.SetCitiesList, (cities: ICityItem[]) => ({payload: cities}))
