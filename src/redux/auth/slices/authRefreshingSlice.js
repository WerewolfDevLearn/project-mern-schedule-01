import { createSlice } from '@reduxjs/toolkit';

import { getCurrent } from '../authOps';

const initialState = false;

const isRefreshingSlice = createSlice({
  name: 'isRefreshing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrent.pending, () => true)
      .addCase(getCurrent.fulfilled, () => false)
      .addCase(getCurrent.rejected, () => false);
  }
});

export const isRefreshingReducer = isRefreshingSlice.reducer;
