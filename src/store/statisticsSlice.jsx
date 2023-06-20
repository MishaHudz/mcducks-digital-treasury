import { createSlice } from "@reduxjs/toolkit";

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState: {
    totalIncome: { total: 1000 },
    totalExpenses: { total: 500 },
  }
});

export const { actions: statisticsActions, reducer: statisticsReducer } = statisticsSlice;
