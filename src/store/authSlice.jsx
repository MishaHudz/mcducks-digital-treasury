import { createSlice } from '@reduxjs/toolkit';
import { register, userLogin } from './authOperation';

const initialState = {
  user: {
    email: null,
    balance: 0,
    id: null,
  },
  sid: null,
  accessToken: null,
  refreshToken: null,
  error: null,
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
        state.user.email = payload.email;
        state.sid = payload.id;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.message;
      })
      .addCase(userLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.user.email = payload.userData.email;
        state.user.balance = payload.userData.balance;
        state.user.id = payload.userData.id;
        state.sid = payload.sid;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.message;
      });
  },
});

export const authReducer = authSlice.reducer;

// popov@mail.com'
//123123123