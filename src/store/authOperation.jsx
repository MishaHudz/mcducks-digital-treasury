import { createAsyncThunk } from '@reduxjs/toolkit/dist';
import {
  getUserInfo,
  setHeadersToken,
  unSetHeadersToken,
  userBalance,
  userLoginApi,
  userLogoutApi,
  userRegisterApi,
} from 'services/walletApi';

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
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  'user/login',
  async (userdata, { rejectWithValue }) => {
    try {
      const { data } = await userLoginApi(userdata);
      setHeadersToken(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const data = await userLogoutApi();
      unSetHeadersToken();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const balancePatch = createAsyncThunk(
  'user/patch',
  async (userdata, { rejectWithValue }) => {
    try {
      const data = await userBalance(userdata);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getUserInfoOperation = createAsyncThunk(
  'user/info',
  async (_, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.accessToken);
      const data = await getUserInfo();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
