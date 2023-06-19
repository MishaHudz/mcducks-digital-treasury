import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  income: {
    transaction: [],
    state: [],
  },
  expences: {
    transaction: [],
    state: [],
  },
};

const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {},
});

export const transactionReducer = transactionsSlice.reducer;
