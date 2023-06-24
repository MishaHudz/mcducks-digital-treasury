import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionIncome,
  addTransactionIncome,
  getTransactionExpense,
  addTransactionExpense,
  deleteTransaction,
  getTransactionPeriod,
} from './transactionsOperations';
import { deleteHelper } from 'components/helpers/deleteHelper';

const initialState = {
  isLoading: false,
  newBlance: null,
  filterDate: '',
  incomes: [],
  expenses: [],
  transactionIncome: [],
  transactionExpense: [],
  monthStatsIncome: [],
  monthStatsExpenses: [],
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    getFilterDate(state, { payload }) {
      state.filterDate = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getTransactionIncome.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionIncome.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.incomes = payload.incomes;
        state.monthStatsIncome = payload.monthsStats;
      })
      .addCase(getTransactionIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getTransactionExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionExpense.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.expenses = payload.expenses;
        state.monthStatsExpenses = payload.monthsStats;
      })
      .addCase(getTransactionExpense.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addTransactionIncome.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionIncome.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.incomes = payload[1].incomes;
        state.monthStatsIncome = payload[1].monthsStats;
      })
      .addCase(addTransactionIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addTransactionExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionExpense.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.newBlance = payload[0];
        state.expenses = payload[1].expenses;
        state.monthStatsExpenses = payload[1].monthsStats;
      })
      .addCase(addTransactionExpense.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        const helper = deleteHelper(payload);
        return {
          ...state,
          isLoading: false,
          error: null,
          monthStatsExpenses: helper[0] || [],
          monthStatsIncome: helper[1] || [],
          ...payload,
        };
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getTransactionPeriod.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionPeriod.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.transactionIncome = payload.incomes;
        state.transactionExpense = payload.expenses;
      })
      .addCase(getTransactionPeriod.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const transactionReducer = transactionsSlice.reducer;
