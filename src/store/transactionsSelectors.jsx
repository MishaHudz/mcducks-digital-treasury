export const selectCurrentTransactionType = state => state.transactions.currentTransactionType;

export const selectTransactionIsLoading = state => state.transaction.isLoading;

export const selectMonthExpenses = state => state.transaction.monthStatsExpenses;

export const selectMonthIncome = state => state.transaction.monthStatsIncome;

export const selectExpenses = state => state.transaction.expenses;

export const selectIncome = state => state.transaction.incomes;

export const selectFilterDate = state => state.transaction.filterDate;