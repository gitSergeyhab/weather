import { createSlice } from "@reduxjs/toolkit";
import { CityWeatherPosition, DragArea, ElementType } from "../../const/const";

export interface InitialCitiesState {
  dragCityId: number|null,
  dragCityPosition: CityWeatherPosition,
  dragArea: DragArea,
  dragElementType: ElementType
};

const initialState: InitialCitiesState = {
  dragArea: DragArea.None,
  dragCityId: null,
  dragCityPosition: CityWeatherPosition.None,
  dragElementType: ElementType.None
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
    setDragElementType(state, {payload}: {payload: ElementType}) {
      state.dragElementType = payload;
    },
  }
})


export const {
  setDragArea,
  setDragCityId,
  setDragCityPosition,
  setDragElementType
} = dndSlice.actions
