import axios from 'axios';

// axios.defaults.baseURL = 'https://project-mern-schedule-03.onrender.com/api';
axios.defaults.baseURL = 'http://localhost:3001/api';
export async function userRegister(userData) {
  const response = await axios.post('/users/register', userData);
  return response.data;
}
export async function userLogin(loginData) {
  const response = await axios.post('/users/login', loginData);
  const data = response.data;
  return data;
}
export async function userLogOut() {
  const response = await axios.post('/users/logout');
  const data = response.data;
  return data;
}
export async function getCurrentUser(tokenAuth) {
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await axios.get('/users/current');
  const data = response.data;
  return data;
}

export async function verifyByCode(verifyCode) {
  const response = await axios.post('/users/verify', verifyCode);
  const data = response.data;
  return data;
}

export async function updateUser(userDate, tokenAuth) {
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  const response = await axios.patch('/users/profile', userDate);
  const data = response.data;
  return data;
}
export async function deleteUser(userDate, tokenAuth) {
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await axios.delete('/users/current');
  const data = response.data;
  return data;
}
export async function changeEmail(userDate, tokenAuth) {
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await axios.patch('/users/email', userDate);
  const data = response.data;
  return data;
}
export async function changePassword(userDate, tokenAuth) {
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await axios.patch('/users/password', userDate);
  const data = response.data;
  return data;
}

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
};
