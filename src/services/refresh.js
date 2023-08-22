import axios from 'axios';

import { store } from 'src/redux/store';

import { authenticate } from '../redux/auth/authOps';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  }
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    // eslint-disable-next-line eqeqeq
    if (error.response.status == 401) {
      const refreshToken = store.getState().user.refreshToken;
      if (!refreshToken) {
        return;
      }
      // eslint-disable-next-line dot-notation
      axios.defaults.headers.common['refreshtoken'] = refreshToken;
      error.config.headers.refreshtoken = `${refreshToken}`;

      try {
        const { data } = await axios.post('/users/refresh', { refreshToken }); // req.body do not attach refreshToken sometimes !!!

        token.set(data.token);
        await store.dispatch(authenticate({ token: data.token, refreshToken: data.refreshToken }));
        error.config.headers.Authorization = `Bearer ${data.token}`;

        return axios(error.config);
      } catch (error) {
        error.message = 'Unauthorized';
        return Promise.reject(error);
      }
    }
  }
);
