import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  userRegister,
  userLogin,
  userLogOut,
  getCurrentUser,
  verifyByCode,
  token,
  updateUser,
  deleteUser,
  changeEmail,
  changePassword,
  forgotPwd,
  resetPwd
} from 'src/services/authAxApi';

export const authenticate = createAsyncThunk('user/Auth', function (token, { rejectWithValue }) {
  try {
    return token;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const register = createAsyncThunk(
  'user/Register',
  async function (user, { rejectWithValue }) {
    try {
      const response = await userRegister(user);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
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
      return rejectWithValue(error);
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
    return credentials;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const updUser = createAsyncThunk(
  'user/Update',
  async (userData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const stateToken = state.user.token;
      if (!stateToken) return rejectWithValue('Please register or login!');
      const credentials = await updateUser(userData, stateToken);
      return credentials;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const delUser = createAsyncThunk(
  'user/DeleteUser',
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const stateToken = state.user.token;
      if (!stateToken) return rejectWithValue('You have no rights');
      const credentials = await deleteUser(stateToken);
      return credentials;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const changePW = createAsyncThunk(
  'user/ChangePassword',
  async (userData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const stateToken = state.user.token;
      if (!stateToken) return rejectWithValue('You have no rights');
      const credentials = await changePassword(userData, stateToken);
      return credentials;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const changeEM = createAsyncThunk(
  'user/ChangeEmail',
  async (userData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const stateToken = state.user.token;
      if (!stateToken) return rejectWithValue('You have no rights');
      const credentials = await changeEmail(userData, stateToken);
      return credentials;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const forgot = createAsyncThunk('user/ForgotPwd', async (email, { rejectWithValue }) => {
  try {
    const response = await forgotPwd(email);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const reset = createAsyncThunk('user/ResetPwd', async (pwd, { rejectWithValue }) => {
  try {
    const response = await resetPwd(pwd);
    return response;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
