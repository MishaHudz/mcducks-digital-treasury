import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getTransactionExpenseApi,
  addTransactionIncomeApi,
  deleteTransactionApi,
  getTransactionIncomeApi,
  getTransactionPeriodDataApi,
  addTransactionExpenseApi,
  setHeadersToken,
} from 'services/walletApi';

export const getTransactionIncome = createAsyncThunk(
  'transaction/income/get',
  async (_, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.accessToken);
      const data = await getTransactionIncomeApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionIncome = createAsyncThunk(
  'transaction/income/add',
  async (transactionForm, { rejectWithValue }) => {
    try {
      const { newBalance } = await addTransactionIncomeApi(transactionForm);
      const data = await getTransactionIncomeApi();
      return [newBalance, data];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionExpense = createAsyncThunk(
  'transaction/expenses/get',
  async (_, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.accessToken);
      const data = await getTransactionExpenseApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionExpense = createAsyncThunk(
  'transaction/expenses/add',
  async (transactionForm, { rejectWithValue }) => {
    try {
      const { newBalance } = await addTransactionExpenseApi(transactionForm);
      const data = await getTransactionExpenseApi();
      return [newBalance, data];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/delete',
  async ([transactionId, expenses], { rejectWithValue }) => {
    try {
      const { newBalance } = await deleteTransactionApi(transactionId);
      const data =
        expenses === 'income'
          ? await getTransactionIncomeApi()
          : await getTransactionExpenseApi();
      return { ...data, newBalance };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionPeriod = createAsyncThunk(
  'transaction/period-data',
  async (date, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.accessToken);
      const data = await getTransactionPeriodDataApi(date);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
