import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    ItemsFilter(_, action) {
      return action.payload;
    }
  }
});

export const filterReducer = filterSlice.reducer;
export const { ItemsFilter } = filterSlice.actions;
