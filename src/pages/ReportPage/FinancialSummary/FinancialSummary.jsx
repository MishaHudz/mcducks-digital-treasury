import React from 'react';
import { useSelector } from 'react-redux';

const FinancialSummary = () => {
  const totalIncome = useSelector((state) => state.statistics.totalIncome.total);
  const totalExpenses = useSelector((state) => state.statistics.totalExpenses.total);

  return (
    <div>
      <p>Expenses: <span>{totalExpenses} UAH.</span></p>
      <p>Income: <span>{totalIncome} UAH.</span></p>
    </div>
  );
};

export default FinancialSummary;
