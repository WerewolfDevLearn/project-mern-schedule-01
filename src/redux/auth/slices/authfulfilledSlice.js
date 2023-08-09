import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { register, userlogin, logOut, getCurrent, verify } from '../authOps';

const initialState = { token: '', email: '', name: '', avatarUrl: '', verifiedEmail: '' };

const userHandler = (state, { payload }) => {
  state.email = payload.user.email;
  state.name = payload.user.name;
  state.avatarUrl = payload.user.avatarUrl;
  state.verifiedEmail = payload.user.verifiedEmail;
  state.token = payload.token;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, userHandler)
      .addCase(userlogin.fulfilled, userHandler)
      .addCase(verify.fulfilled, userHandler)
      .addCase(getCurrent.fulfilled, userHandler)
      .addCase(logOut.fulfilled, () => initialState);
  }
});

const persistUserConfig = {
  key: 'credentials',
  storage,
  whitelist: ['token', 'email']
};

const userReducer = userSlice.reducer;
export const persistedUserReducer = persistReducer(persistUserConfig, userReducer);
