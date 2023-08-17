import { createSlice } from '@reduxjs/toolkit';

import { register, userlogin, logOut, verify, updUser } from '../authOps';

const initialState = false;

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, () => true)
      .addCase(userlogin.pending, () => true)
      .addCase(logOut.pending, () => true)
      .addCase(verify.pending, () => true)
      .addCase(updUser.pending, () => true)

      .addCase(register.fulfilled, () => false)
      .addCase(userlogin.fulfilled, () => false)
      .addCase(logOut.fulfilled, () => false)
      .addCase(verify.fulfilled, () => false)
      .addCase(updUser.fulfilled, () => false)

      .addCase(register.rejected, () => false)
      .addCase(userlogin.rejected, () => false)
      .addCase(logOut.rejected, () => false)
      .addCase(verify.rejected, () => false)
      .addCase(updUser.rejected, () => false);
  }
});

export const isLoadingReducer = isLoadingSlice.reducer;
