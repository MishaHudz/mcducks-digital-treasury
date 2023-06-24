import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getTransactionExpense,
  getTransactionIncome,
} from '../../../store/transactionsOperations';
import {
  SummaryBlock,
  SummaryText,
  SummaryNum,
  SummaryExpenses,
  SummaryBreak,
  SummaryIncome,
} from './Financial.styled';

const FinancialSummary = ({ selectedMonth }) => {
  const monthStats = useSelector(state => state.transaction.monthStatsExpenses);
  const monthStatsIncome = useSelector(
    state => state.transaction.monthStatsIncome
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionExpense());
  }, [dispatch, selectedMonth]);

  useEffect(() => {
    dispatch(getTransactionIncome());
  }, [dispatch, selectedMonth]);

  const renderMonthStats = () => {
    const selectedMonthIndex = selectedMonth.getMonth();

    switch (selectedMonthIndex) {
      case 0:
        return renderMonthValue(monthStats.Январь, monthStatsIncome.Январь);
      case 1:
        return renderMonthValue(monthStats.Февраль, monthStatsIncome.Февраль);
      case 2:
        return renderMonthValue(monthStats.Март, monthStatsIncome.Март);
      case 3:
        return renderMonthValue(monthStats.Апрель, monthStatsIncome.Апрель);
      case 4:
        return renderMonthValue(monthStats.Май, monthStatsIncome.Май);
      case 5:
        return renderMonthValue(monthStats.Июнь, monthStatsIncome.Июнь);
      case 6:
        return renderMonthValue(monthStats.Июль, monthStatsIncome.Июль);
      case 7:
        return renderMonthValue(monthStats.Август, monthStatsIncome.Август);
      case 8:
        return renderMonthValue(monthStats.Сентябрь, monthStatsIncome.Сентябрь);
      case 9:
        return renderMonthValue(monthStats.Октябрь, monthStatsIncome.Октябрь);
      case 10:
        return renderMonthValue(monthStats.Ноябрь, monthStatsIncome.Ноябрь);
      case 11:
        return renderMonthValue(monthStats.Декабрь, monthStatsIncome.Декабрь);
      default:
        return (
          <SummaryBlock>
            <SummaryText>
              expenses:{' '}
              <SummaryNum>
                <SummaryExpenses>0 UAH.</SummaryExpenses>
              </SummaryNum>
              <SummaryBreak>|</SummaryBreak>
              incomes: <SummaryNum>0 UAH.</SummaryNum>
            </SummaryText>
          </SummaryBlock>
        );
    }
  };

  const renderMonthValue = (expenseValue, incomeValue) => {
    if (expenseValue === 'N/A') {
      expenseValue = 0;
    }

    if (incomeValue === 'N/A') {
      incomeValue = 0;
    }

    return (
      <SummaryBlock>
        <SummaryText>
          expenses:{' '}
          <SummaryNum>
            <SummaryExpenses>{expenseValue} UAH.</SummaryExpenses>
          </SummaryNum>
          <SummaryBreak>|</SummaryBreak>
          incomes:{' '}
          <SummaryNum>
            <SummaryIncome>{incomeValue} UAH.</SummaryIncome>
          </SummaryNum>
        </SummaryText>
      </SummaryBlock>
    );
  };

  return <div>{renderMonthStats()}</div>;
};

export default FinancialSummary;
