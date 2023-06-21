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
import {
  getTransactionExpense,
  // getTransactionIncome,
} from 'store/transactionsOperations';
export const Summary = () => {
  const monthStats = useSelector(state => state.transaction.monthStatsExpenses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionExpense());
    // dispatch();
  }, []);

  return (
    <SummaryWrapper>
      <SummaryTitle>Summary</SummaryTitle>
      <SummaryList>
        {Object.entries(monthStats).map(month => {
          return month[1] !== 'N/A' ? (
            <SummaryListItem>
              <SummaryText>{month[0]}</SummaryText>
              <SummaryAmount>{month[1]}</SummaryAmount>
            </SummaryListItem>
          ) : (
            <SummaryListItem></SummaryListItem>
          );
        })}
      </SummaryList>
    </SummaryWrapper>
  );
};
