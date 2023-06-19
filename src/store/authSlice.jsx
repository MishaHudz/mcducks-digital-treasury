import { createSlice } from '@reduxjs/toolkit';
import { register, userLogin } from 'services/walletApi';

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
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
        state.userEmail = payload.user.email;
        state.userName = payload.user.name;
        state.isAuth = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isAuth = false;
      })
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
        state.isAuth = false;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.token = payload.token;
        state.userEmail = payload.user.email;
        state.userName = payload.user.name;
        state.isAuth = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isAuth = false;
      });
  },
});

export const authReducer = authSlice.reducer;
