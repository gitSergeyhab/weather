import { createSlice } from "@reduxjs/toolkit";
import { DragArea } from "../../const";

export interface InitialCitiesState {


  cityWeatherOverId: number|null,
  dragArea: DragArea,
  dragCardPosition: 'top'|'bottom',
};


const initialState: InitialCitiesState = {

  dragArea: DragArea.None,
  // currentWeatherCity: null,
  cityWeatherOverId: null,
  dragCardPosition: 'top'
};


export const dndSlice = createSlice({
  name: 'dndSlice',
  initialState,
  reducers: {
    setCityWeatherOverId(state, {payload}: {payload: null|number}) {
      state.cityWeatherOverId = payload;
    },
    setDragArea(state, {payload}) {
      state.dragArea = payload;
    },

    setDragCardPosition(state, {payload}) {
      state.dragCardPosition = payload;
    },


  }
})


export const {setCityWeatherOverId, setDragArea,setDragCardPosition} = dndSlice.actions
