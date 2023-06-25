import { combineReducers } from '@reduxjs/toolkit';
import { transactionReducer } from './transactionsSlice';
import { authReducer } from './authSlice';

export const reducer = combineReducers({
  transaction: transactionReducer,
  auth: authReducer,
});
