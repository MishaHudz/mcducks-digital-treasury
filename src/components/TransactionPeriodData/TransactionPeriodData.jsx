import { useEffect } from 'react';
import { getTransactionPeriod } from '../../store/transactionsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { categoryTranslationRuToEn } from '../AddTransaction/TranslateFunc';

import {
  BoxStyled,
  ItemStyled,
  ListStyled,
  TextStyled,
} from './TransactionPeriodData.styled';
import Alcohol from '../../images/transactionImages/alcohol.png';
import Communal_Communication from '../../images/transactionImages/communal.png';
import Education from '../../images/transactionImages/education.png';
import Entertainment from '../../images/transactionImages/entertainment.png';
import Health from '../../images/transactionImages/health.png';
import Housing from '../../images/transactionImages/housing.png';
import Products from '../../images/transactionImages/products.png';
import Other from '../../images/transactionImages/other.png';
import Sports_Hobbies from '../../images/transactionImages/sports.png';
import Technique from '../../images/transactionImages/technique.png';
import Transport from '../../images/transactionImages/transport.png';
import Additional_income from '../../images/transactionImages/walletcar.png';
import Salary from '../../images/transactionImages/sallary.png';
import { useSearchParams } from 'react-router-dom';
import ChangeIncomExpense from 'components/ChangeIncomExpense/ChangeIncomExpense';

function TransactionPeriodData() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getTransactionPeriod('2023-06'));
  }, [dispatch]);

  const expens = useSelector(
    state => state.transaction.transactionExpense.expensesData
  );
  // const incom = useSelector(state =>
  //   console.log(state.transaction.transactionIncome)
  // );

  const expensArr = Object.keys(expens).length && Object.entries(expens);
  const englArr = Object.keys(expensArr).length
    ? expensArr.map(el => {
        return [(el[0] = categoryTranslationRuToEn(el[0])), el[1]];
      })
    : [];

  useEffect(() => {
    setSearchParams({
      operation: 'expenses',
      category: englArr.length ? englArr[0][0] : '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const obj = {
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
    Additional_income,
    Salary,
  };

  return (
    <>
      <ChangeIncomExpense />
      <ListStyled>
        {englArr.map((el, idx) => {
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
              <p>{el[1].total}</p>
              <BoxStyled>
                <img src={obj[el[0].split(',').join('_')]} alt="" />
              </BoxStyled>
              <TextStyled>{el[0]}</TextStyled>
            </ItemStyled>
          );
        })}
      </ListStyled>
    </>
  );
}

export default TransactionPeriodData;
