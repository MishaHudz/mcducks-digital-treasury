import { createSlice } from '@reduxjs/toolkit';
import {
  balancePatch,
  getUserInfoOperation,
  register,
  userLogin,
  userLogout,
} from './authOperation';
import {
  addTransactionExpense,
  addTransactionIncome,
  deleteTransaction,
} from './transactionsOperations';

const initialState = {
  user: {
    email: null,
    balance: 0,
    id: null,
    transactions: [],
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
  reducers: {
    logOutAction: state => {
      state.error = null;
      state.isLoading = false;
      state.accessToken = null;
      state.user.email = null;
      state.user.balance = 0;
      state.user.id = null;
      state.user.transactions = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.email = payload.email;
        state.sid = payload.id;
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
      .addCase(userLogout.fulfilled, (state, { payload }) => {
        state.user.email = null;
        state.user.balance = null;
        state.user.id = null;
        state.user.transactions = [];
        state.sid = null;
        state.accessToken = null;
        state.refreshToken = null;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(balancePatch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.balance = payload.newBalance;
      })
      .addCase(getUserInfoOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.balance = payload.balance;
        state.user.transactions = payload.transactions;
      })
      .addCase(addTransactionIncome.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.balance = payload[0];
      })
      .addCase(addTransactionExpense.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.balance = payload[0];
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.balance = payload.newBalance;
      })
      .addMatcher(
        action => {
          return action.type.endsWith('/pending');
        },
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/rejected');
        },
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload.message;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
export const { logOutAction } = authSlice.actions;
