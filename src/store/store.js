import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { transactionReducer } from './transactionsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transaction: transactionReducer,
    report: {},
  },
});
