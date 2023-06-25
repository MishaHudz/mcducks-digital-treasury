import { nanoid } from '@reduxjs/toolkit';
import {
  SummaryAmount,
  SummaryListItem,
  SummaryText,
  SummaryWrapper,
} from './Summary.styled';
import { SummaryTitle } from './Summary.styled';
import { SummaryList } from './Summary.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  getTransactionExpense,
  getTransactionIncome,
} from 'store/transactionsOperations';
import {
  selectMonthExpenses,
  selectMonthIncome,
} from 'store/transactionsSelectors';
export const Summary = () => {
  const monthStatsExpenses = useSelector(selectMonthExpenses);
  const monthStatsIncomes = useSelector(selectMonthIncome);
  const { accessToken } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const operation = urlSearchParams.get('operation');

  const monthTranslations = {
    январь: 'January',
    февраль: 'February',
    март: 'March',
    апрель: 'April',
    май: 'May',
    июнь: 'June',
    июль: 'July',
    август: 'August',
    сентябрь: 'September',
    октябрь: 'October',
    ноябрь: 'November',
    декабрь: 'December',
  };

  function funcSplit(num) {
    const res = String(num).split('.');
    if (res.length === 1) {
      return num + '.00';
    }
    if (res[1].length === 1) {
      return num + '0';
    }
    return num;
  }

  useEffect(() => {
    if (accessToken) {
      if (operation === 'income') {
        dispatch(getTransactionIncome());
      } else {
        dispatch(getTransactionExpense());
      }
    }
  }, [accessToken, dispatch, operation]);

  return (
    <SummaryWrapper>
      <SummaryTitle>Summary</SummaryTitle>
      <SummaryList>
        {Object.entries(
          operation === 'income' ? monthStatsIncomes : monthStatsExpenses
        )
          .filter(month => month[1] !== 'N/A')
          .map(month => (
            <SummaryListItem key={nanoid()}>
              <SummaryText>
                {monthTranslations[month[0].toLowerCase()].toUpperCase()}
              </SummaryText>
              <SummaryAmount>{funcSplit(month[1])}</SummaryAmount>
            </SummaryListItem>
          ))}
        {Object.entries(
          operation === 'income' ? monthStatsIncomes : monthStatsExpenses
        )
          .filter(month => month[1] === 'N/A')
          .map(month => (
            <SummaryListItem key={nanoid()}></SummaryListItem>
          ))}
      </SummaryList>
    </SummaryWrapper>
  );
};
