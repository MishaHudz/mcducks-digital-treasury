import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authSlice';
import { transactionReducer } from './transactionsSlice';
import { statisticsReducer } from './statisticsSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    transaction: transactionReducer,
    statistics: statisticsReducer,
  },
});
