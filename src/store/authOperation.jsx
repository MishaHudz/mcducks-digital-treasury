import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import axios from 'axios';
import { userLoginApi, userRegisterApi } from 'services/walletApi';

export const register = createAsyncThunk(
  'user/register',
  async (userdata, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await userRegisterApi(userdata);
      setTimeout(() => {
        dispatch(userLogin(userdata));
      });
      return data;
    } catch (error) {
      window.alert(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/login',
  async (userdata, { rejectWithValue }) => {
    try {
      const { data } = await userLoginApi(userdata);
      return data;
    } catch (error) {
      window.alert(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);
