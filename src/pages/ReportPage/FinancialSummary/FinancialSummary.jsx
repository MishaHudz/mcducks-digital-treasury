import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTransactionExpense } from '../../../store/transactionsOperations';
import './FinancialSummary.css'

const FinancialSummary = ({ selectedMonth }) => {
  const monthStats = useSelector(state => state.transaction.monthStatsExpenses);

  console.log(monthStats);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionExpense());
  }, [dispatch]);

  const renderMonthStats = () => {
    const selectedMonthIndex = selectedMonth.getMonth();
  
    if (monthStats === "N/A") {
      return <p className='summary-text'>expenses: 0 UAH.</p>;
    }
  
    switch (selectedMonthIndex) {
      case 0:
        return renderMonthValue(monthStats.Январь);
      case 1:
        return renderMonthValue(monthStats.Февраль);
      case 2:
        return renderMonthValue(monthStats.Март);
      case 3:
        return renderMonthValue(monthStats.Апрель);
      case 4:
        return renderMonthValue(monthStats.Май);
      case 5:
        return renderMonthValue(monthStats.Июнь);
      case 6:
        return renderMonthValue(monthStats.Июль);
      case 7:
        return renderMonthValue(monthStats.Август);
      case 8: 
        return renderMonthValue(monthStats.Сентябрь);
      case 9:
        return renderMonthValue(monthStats.Октябрь);
      case 10:
        return renderMonthValue(monthStats.Ноябрь);
      case 11:
        return renderMonthValue(monthStats.Декабрь);
      default:
        return <p className='summary-text'>expenses: 0 UAH.</p>;
    }
  };

  const renderMonthValue = (value) => {
    return <div className='summary-block'><div className='summary-text'>expenses:<span className='summary-expenses summary-num'>{value} UAH.</span>
    incomes:<span className='summary-income summary-num'>{value} UAH.</span>
           </div></div>;
  };

  return (
    <div>
      {renderMonthStats()}

    </div>
  );
};

export default FinancialSummary;
