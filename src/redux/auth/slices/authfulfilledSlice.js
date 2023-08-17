import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { register, userlogin, logOut, getCurrent, verify, updUser } from '../authOps';

const initialState = {
  userId: '',
  token: '',
  refreshToken: '',
  email: '',
  name: '',
  avatarUrl: '',
  verifiedEmail: '',
  phone: '',
  skype: '',
  birthday: ''
};

const userRegister = (state, { payload }) => {
  state.name = payload.user.name;
  state.email = payload.user.email;
  state.phone = payload.user.phone;
  state.birthday = payload.user.birthday;
  state.avatarUrl = payload.user.avatarUrl;
  state.userId = payload.user._id;
};
const userLogin = (state, { payload }) => {
  state.email = payload.user.email;
  state.name = payload.user.name;
  state.phone = payload.user.phone;
  state.skype = payload.user.skype;
  state.birthday = payload.user.birthday;
  state.avatarUrl = payload.user.avatarUrl;
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
};
const userGetCurrent = (state, { payload }) => {
  state.email = payload.user.email;
  state.name = payload.user.name;
  state.phone = payload.user.phone;
  state.skype = payload.user.skype;
  state.birthday = payload.user.birthday;
  state.avatarUrl = payload.user.avatarUrl;
};
const userVerify = (state, { payload }) => {
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
};
const userHandler = (state, { payload }) => {
  state.name = payload.user.name;
  state.phone = payload.user.phone;
  state.skype = payload.user.skype;
  state.birthday = payload.user.birthday;
  state.avatarUrl = payload.user.avatarUrl;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, userRegister)
      .addCase(userlogin.fulfilled, userLogin)
      .addCase(verify.fulfilled, userVerify)
      .addCase(getCurrent.fulfilled, userGetCurrent)
      .addCase(updUser.fulfilled, userHandler)
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
