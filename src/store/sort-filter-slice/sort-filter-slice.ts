import { createSlice } from "@reduxjs/toolkit";
import { CitySort } from "../../const";


export interface InitialSortFilterState {
  sortChecked: 'arrow-down'|'arrow-up',
  filterChecked: string[],
  citySort: CitySort
};


const initialState: InitialSortFilterState = {
  sortChecked: 'arrow-down',
  citySort: CitySort.Name,
  filterChecked: []
};

export const sortFilterSlice = createSlice({
  name: 'sortFilterSlice',
  initialState,
  reducers: {
    setSortChecked(state, {payload}) {
      state.sortChecked = payload;
      state.citySort = payload === 'arrow-down' ? CitySort.Name : CitySort.NameReverse;
    },

    setFilterChecked(state, {payload}) {
      const filters = state.filterChecked;
      const index = filters.findIndex((item) => item === payload);
      if (index === -1) {
        state.filterChecked = [...filters, payload];
      } else {
        state.filterChecked = [...filters.slice(0, index), ...filters.slice(index+1)];
      }
    },
  },

})

export const { setFilterChecked, setSortChecked } = sortFilterSlice.actions;
