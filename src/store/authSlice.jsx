import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: {
    email: null,
    balance: 0,
  },
  sid: null,
  accessToken: null,
  refreshToken: null,
  eror: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
