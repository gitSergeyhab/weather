import { createSlice } from "@reduxjs/toolkit";
import { CityWeatherPosition, DragArea } from "../../const";

export interface InitialCitiesState {
  dragCityId: number|null,
  dragCityPosition: CityWeatherPosition,
  dragArea: DragArea,
};


const initialState: InitialCitiesState = {
  dragArea: DragArea.None,
  dragCityId: null,
  dragCityPosition: CityWeatherPosition.None,
};


export const dndSlice = createSlice({
  name: 'dndSlice',
  initialState,
  reducers: {
    setDragCityId(state, {payload}: {payload: null|number}) {
      state.dragCityId = payload;
    },
    setDragArea(state, {payload}) {
      state.dragArea = payload;
    },
    setDragCityPosition(state, {payload}) {
      state.dragCityPosition = payload;
    },
  }
})


export const {setDragArea, setDragCityId, setDragCityPosition} = dndSlice.actions
