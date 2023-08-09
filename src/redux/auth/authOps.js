import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  userRegister,
  userLogin,
  userLogOut,
  getCurrentUser,
  verifyByCode,
  sendVEmail,
  token
} from '../../services/authAxApi';

export const register = createAsyncThunk(
  'user/Register',
  async function (user, { rejectWithValue }) {
    try {
      const response = await userRegister(user);
      // token.set(response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userlogin = createAsyncThunk(
  'user/Login',
  async function (loginU, { rejectWithValue }) {
    try {
      const response = await userLogin(loginU);
      token.set(response.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('user/LogOut', async (_, { rejectWithValue }) => {
  try {
    const response = await userLogOut();
    token.unset();
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const getCurrent = createAsyncThunk(
  'user/GetCurrent',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const stateToken = state.user.token;
      if (!stateToken) return rejectWithValue('Please register or login!');
      const credentials = await getCurrentUser(stateToken);
      return credentials;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const verify = createAsyncThunk('user/VerifyEmail', async (code, { rejectWithValue }) => {
  try {
    const credentials = await verifyByCode(code);
    token.set(credentials.token);
    return credentials;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const sendEmail = createAsyncThunk('user/SendEmail', async (email, { rejectWithValue }) => {
  try {
    const credentials = await sendVEmail(email);
    return credentials;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
