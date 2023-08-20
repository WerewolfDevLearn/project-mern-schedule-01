import { createSlice } from '@reduxjs/toolkit';

import {
  authGoogle,
  register,
  userlogin,
  logOut,
  verify,
  updUser,
  delUser,
  changeEM,
  changePW
} from '../authOps';

const initialState = false;

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authGoogle.pending, () => true)
      .addCase(register.pending, () => true)
      .addCase(userlogin.pending, () => true)
      .addCase(logOut.pending, () => true)
      .addCase(verify.pending, () => true)
      .addCase(updUser.pending, () => true)
      .addCase(delUser.pending, () => true)
      .addCase(changeEM.pending, () => true)
      .addCase(changePW.pending, () => true)

      .addCase(authGoogle.fulfilled, () => false)
      .addCase(register.fulfilled, () => false)
      .addCase(userlogin.fulfilled, () => false)
      .addCase(logOut.fulfilled, () => false)
      .addCase(verify.fulfilled, () => false)
      .addCase(updUser.fulfilled, () => false)
      .addCase(delUser.fulfilled, () => false)
      .addCase(changeEM.fulfilled, () => false)
      .addCase(changePW.fulfilled, () => false)

      .addCase(authGoogle.rejected, () => false)
      .addCase(register.rejected, () => false)
      .addCase(userlogin.rejected, () => false)
      .addCase(logOut.rejected, () => false)
      .addCase(verify.rejected, () => false)
      .addCase(updUser.rejected, () => false)
      .addCase(delUser.rejected, () => false)
      .addCase(changeEM.rejected, () => false)
      .addCase(changePW.rejected, () => false);
  }
});

export const isLoadingReducer = isLoadingSlice.reducer;
