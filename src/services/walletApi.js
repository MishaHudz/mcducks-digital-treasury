import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function unSetHeadersToken() {
  axios.defaults.headers.common.Authorization = ``;
}

export const register = createAsyncThunk('user/register', async userdata => {
  try {
    const { data } = await axios.post('auth/register', {
      email: userdata.email,
      password: userdata.userPass,
    });
    // token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const userLogin = createAsyncThunk('user/login', async userdata => {
  try {
    const { data } = await axios.post('auth/login', {
      email: userdata.email,
      password: userdata.userPass,
    });
    // token.set(data.token);

    return data;
  } catch (error) {
    console.log(error);
  }
});
