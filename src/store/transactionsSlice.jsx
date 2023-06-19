import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isIncome: false,
  income: {
    transaction: [],
    // transaction: [
    //   {
    //     description: 'Пенсія',
    //     amount: 4500,
    //     date: '2020-12-30',
    //     category: 'Доход',
    //     _id: '507f1f77bcf86cd799439011',
    //   },
    //   {
    //     description: 'Зарплата',
    //     amount: 10000,
    //     date: '2020-12-15',
    //     category: 'Доход',
    //     _id: '507f1f77bcf86cd799439012',
    //   },
    // ],
    state: [],
  },
  expences: {
    transaction: [],
    // transaction: [
    //   {
    //     description: 'Pizza',
    //     amount: 450,
    //     date: '2020-12-01',
    //     category: 'Продукты',
    //     _id: '507f1f77bcf86cd799439019',
    //   },
    //   {
    //     description: 'Fish',
    //     amount: 200,
    //     date: '2020-12-20',
    //     category: 'Продукты',
    //     _id: '507f1f77bcf86cd799439021',
    //   },
    //   {
    //     description: 'Gym',
    //     amount: 500,
    //     date: '2020-12-05',
    //     category: 'Спорт',
    //     _id: '507f1f77bcf86cd799439035',
    //   },
    // ],
    state: [],
  },
};

const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: {},
});

export const transactionReducer = transactionsSlice.reducer;
