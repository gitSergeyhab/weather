import { createSlice } from "@reduxjs/toolkit";


export interface InitialSortFilterState {
  sortChecked: 'arrow-down'|'arrow-up',
  filterChecked: string[]
};


const initialState: InitialSortFilterState = {
  sortChecked: 'arrow-down',
  filterChecked: []
};

export const sortFilterSlice = createSlice({
  name: 'sortFilterSlice',
  initialState,
  reducers: {
    setSortChecked(state, {payload}) {
      state.sortChecked = payload;
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
