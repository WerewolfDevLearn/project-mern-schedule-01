import { createSlice } from '@reduxjs/toolkit';

import { register, userlogin, logOut, getCurrent, verify } from '../authOps';

const initialState = '';

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, () => '')
      .addCase(userlogin.pending, () => '')
      .addCase(logOut.pending, () => '')
      .addCase(verify.pending, () => '')

      .addCase(register.rejected, (_, { payload }) => payload)
      .addCase(userlogin.rejected, (_, { payload }) => payload)
      .addCase(logOut.rejected, (_, { payload }) => payload)
      .addCase(getCurrent.rejected, (_, { payload }) => payload)
      .addCase(verify.rejected, (_, { payload }) => payload);
  }
});

export const errorReducer = errorSlice.reducer;
