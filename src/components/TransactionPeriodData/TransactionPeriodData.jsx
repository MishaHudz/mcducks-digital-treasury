import { useEffect } from 'react';
import { getTransactionPeriod } from '../../store/transactionsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { categoryTranslationRuToEn } from '../AddTransaction/TranslateFunc';

import {
  BoxStyled,
  CommentTitle,
  ItemStyled,
  ListStyled,
  TextStyled,
} from './TransactionPeriodData.styled';
import { useSearchParams } from 'react-router-dom';
import ChangeIncomExpense from 'components/ChangeIncomExpense/ChangeIncomExpense';
import { useState } from 'react';

import Alcohol from '../../images/icons/alcohol.png';
import Communal_Communication from '../../images/icons/communal_communication.png';
import Education from '../../images/icons/education.png';
import Entertainment from '../../images/icons/entertaiment.png';
import Health from '../../images/icons/health.png';
import Housing from '../../images/icons/housing.png';
import Products from '../../images/icons/products.png';
import Other from '../../images/icons/other.png';
import Sports_Hobbies from '../../images/icons/sports_hobbies.png';
import Technique from '../../images/icons/technique.png';
import Transport from '../../images/icons/transport.png';
import Additional_income from '../../images/icons/add_income.png';
import Salary from '../../images/icons/salary.png';

function TransactionPeriodData({ selectedMonth }) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [operation, setOperation] = useState('expences');
  const { accessToken } = useSelector(state => state.auth);

  const timeE =
    selectedMonth.getFullYear() +
    '-' +
    ('0' + (selectedMonth.getMonth() + 1)).slice(-2);

  useEffect(() => {
    accessToken && dispatch(getTransactionPeriod(timeE));
  }, [dispatch, timeE, accessToken]);

  const expens = useSelector(
    state => state.transaction.transactionExpense.expensesData
  );

  const income = useSelector(
    state => state.transaction.transactionIncome.incomesData
  );

  const incomeArr = income
    ? Object.keys(income).length && Object.entries(income)
    : {};

  const expensArr = expens
    ? Object.keys(expens).length && Object.entries(expens)
    : {};

  const englIncomeArr = Object.keys(incomeArr).length
    ? incomeArr.map(el => {
        return [(el[0] = categoryTranslationRuToEn(el[0])), el[1]];
      })
    : [];

  const englExpensesArr = Object.keys(expensArr).length
    ? expensArr.map(el => {
        return [(el[0] = categoryTranslationRuToEn(el[0])), el[1]];
      })
    : [];

  useEffect(() => {
    setSearchParams({
      operation: 'expenses',
      category: englExpensesArr.length ? englExpensesArr[0][0] : '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const objExpenses = {
    Alcohol,
    Communal_Communication,
    Education,
    Entertainment,
    Health,
    Housing,
    Products,
    Other,
    Sports_Hobbies,
    Technique,
    Transport,
  };

  const objIncome = {
    Additional_income,
    Salary,
  };

  useEffect(() => {
    setOperation(searchParams.get('operation'));
  }, [searchParams]);

  useEffect(() => {
    if (operation === 'income') {
      setSearchParams({
        operation: 'income',
        category: englIncomeArr.length ? englIncomeArr[0][0] : '',
      });
    }
    if (operation === 'expenses') {
      setSearchParams({
        operation: 'expenses',
        category: englExpensesArr.length ? englExpensesArr[0][0] : '',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operation]);

  return (
    <>
      <ChangeIncomExpense />
      <ListStyled>
        {(operation === 'expenses' ? englExpensesArr : englIncomeArr).map(
          (el, idx) => {
            return (
              <ItemStyled
                key={idx}
                onClick={() => {
                  setSearchParams({
                    operation: searchParams.get('operation'),
                    category: el[0],
                  });
                }}
              >
                <CommentTitle>{el[1].total.toFixed(2)}</CommentTitle>
                <BoxStyled>
                  <img
                    src={
                      operation === 'expenses'
                        ? objExpenses[el[0].split(',').join('_')]
                        : objIncome[el[0].split(' ').join('_')]
                    }
                    width="48"
                    height="48"
                    alt=""
                  />
                </BoxStyled>
                <TextStyled>{el[0].split(',').join(', ')}</TextStyled>
              </ItemStyled>
            );
          }
        )}
      </ListStyled>
    </>
  );
}

export default TransactionPeriodData;
