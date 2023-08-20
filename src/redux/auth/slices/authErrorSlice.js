import { createSlice } from '@reduxjs/toolkit';

import {
  authenticate,
  register,
  userlogin,
  logOut,
  getCurrent,
  verify,
  updUser,
  changeEM,
  changePW,
  delUser
} from '../authOps';

const initialState = '';

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.pending, () => '')
      .addCase(register.pending, () => '')
      .addCase(userlogin.pending, () => '')
      .addCase(logOut.pending, () => '')
      .addCase(verify.pending, () => '')
      .addCase(updUser.pending, () => '')
      .addCase(delUser.pending, () => '')
      .addCase(changeEM.pending, () => '')
      .addCase(changePW.pending, () => '')

      .addCase(authenticate.rejected, (_, { payload }) => payload)
      .addCase(register.rejected, (_, { payload }) => payload)
      .addCase(userlogin.rejected, (_, { payload }) => payload)
      .addCase(logOut.rejected, (_, { payload }) => payload)
      .addCase(getCurrent.rejected, (_, { payload }) => payload)
      .addCase(verify.rejected, (_, { payload }) => payload)
      .addCase(updUser.rejected, (_, { payload }) => payload)
      .addCase(delUser.rejected, (_, { payload }) => payload)
      .addCase(changeEM.rejected, (_, { payload }) => payload)
      .addCase(changePW.rejected, (_, { payload }) => payload);
  }
});

export const errorReducer = errorSlice.reducer;
