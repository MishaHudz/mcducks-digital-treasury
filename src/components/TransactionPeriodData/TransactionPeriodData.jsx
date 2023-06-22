import { useEffect } from 'react';
import { getTransactionPeriod } from '../../store/transactionsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { categoryTranslationRuToEn } from '../AddTransaction/TranslateFunc';

function TransactionPeriodData() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactionPeriod('2023-06'));
  }, [dispatch]);
  const expens = useSelector(
    state => state.transaction.transactionExpense.expensesData
  );
  // console.log(expens);
  const expensArr = expens && Object.entries(expens);
  const englArr = expensArr.map(el => {
    return [(el[0] = categoryTranslationRuToEn(el[0])), el[1]];
  });
  console.log(englArr);
  return <ul></ul>;
}

export default TransactionPeriodData;
