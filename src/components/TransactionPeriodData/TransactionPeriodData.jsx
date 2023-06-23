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
import { useState } from 'react';

function TransactionPeriodData({ selectedMonth }) {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [operation, setOperation] = useState('expences');

  const timeE =
    selectedMonth.getFullYear() +
    '-' +
    ('0' + (selectedMonth.getMonth() + 1)).slice(-2);

  useEffect(() => {
    dispatch(getTransactionPeriod(timeE));
  }, [dispatch, timeE]);

  const expens = useSelector(
    state => state.transaction.transactionExpense.expensesData
  );
  const income = useSelector(
    state => state.transaction.transactionIncome.incomesData
  );

  const incomeArr = Object.keys(income).length && Object.entries(income);

  const expensArr = Object.keys(expens).length && Object.entries(expens);

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
                  console.log(el[0]);
                  setSearchParams({
                    operation: searchParams.get('operation'),
                    category: el[0],
                  });
                }}
              >
                <CommentTitle>{el[1].total}</CommentTitle>
                <BoxStyled>
                  <img
                    src={
                      operation === 'expenses'
                        ? objExpenses[el[0].split(',').join('_')]
                        : objIncome[el[0].split(' ').join('_')]
                    }
                    alt=""
                  />
                </BoxStyled>
                <TextStyled>{el[0]}</TextStyled>
              </ItemStyled>
            );
          }
        )}
      </ListStyled>
    </>
  );
}

export default TransactionPeriodData;

// import { useEffect } from 'react';
// import { getTransactionPeriod } from '../../store/transactionsOperations';
// import { useDispatch, useSelector } from 'react-redux';
// import { categoryTranslationRuToEn } from '../AddTransaction/TranslateFunc';

// import {
//   BoxStyled,
//   CommentTitle,
//   ItemStyled,
//   ListStyled,
//   TextStyled,
// } from './TransactionPeriodData.styled';
// import Alcohol from '../../images/transactionImages/alcohol.png';
// import Communal_Communication from '../../images/transactionImages/communal.png';
// import Education from '../../images/transactionImages/education.png';
// import Entertainment from '../../images/transactionImages/entertainment.png';
// import Health from '../../images/transactionImages/health.png';
// import Housing from '../../images/transactionImages/housing.png';
// import Products from '../../images/transactionImages/products.png';
// import Other from '../../images/transactionImages/other.png';
// import Sports_Hobbies from '../../images/transactionImages/sports.png';
// import Technique from '../../images/transactionImages/technique.png';
// import Transport from '../../images/transactionImages/transport.png';
// import Additional_income from '../../images/transactionImages/walletcar.png';
// import Salary from '../../images/transactionImages/sallary.png';
// import { useSearchParams } from 'react-router-dom';
// import ChangeIncomExpense from 'components/ChangeIncomExpense/ChangeIncomExpense';

// function TransactionPeriodData({ selectedMonth }) {
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();

//   const timeE =
//     selectedMonth.getFullYear() +
//     '-' +
//     ('0' + (selectedMonth.getMonth() + 1)).slice(-2);

//   useEffect(() => {
//     dispatch(getTransactionPeriod(timeE));
//   }, [dispatch]);

//   const expens = useSelector(
//     state => state.transaction.transactionExpense.expensesData
//   );
//   // const incom = useSelector(state =>
//   //   console.log(state.transaction.transactionIncome)
//   // );

//   const expensArr = Object.keys(expens).length && Object.entries(expens);
//   const englArr = Object.keys(expensArr).length
//     ? expensArr.map(el => {
//         return [(el[0] = categoryTranslationRuToEn(el[0])), el[1]];
//       })
//     : [];

//   useEffect(() => {
//     setSearchParams({
//       operation: 'expenses',
//       category: englArr.length ? englArr[0][0] : '',
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const obj = {
//     Alcohol,
//     Communal_Communication,
//     Education,
//     Entertainment,
//     Health,
//     Housing,
//     Products,
//     Other,
//     Sports_Hobbies,
//     Technique,
//     Transport,
//     Additional_income,
//     Salary,
//   };

//   return (
//     <>
//       <ChangeIncomExpense />
//       <ListStyled>
//         {englArr.map((el, idx) => {
//           return (
//             <ItemStyled
//               key={idx}
//               onClick={() => {
//                 setSearchParams({
//                   operation: searchParams.get('operation'),
//                   category: el[0],
//                 });
//               }}
//             >
//               <CommentTitle>{el[1].total}</CommentTitle>
//               <BoxStyled>
//                 <img src={obj[el[0].split(',').join('_')]} alt="" />
//               </BoxStyled>
//               <TextStyled>{el[0]}</TextStyled>
//             </ItemStyled>
//           );
//         })}
//       </ListStyled>
//     </>
//   );
// }

// export default TransactionPeriodData;
