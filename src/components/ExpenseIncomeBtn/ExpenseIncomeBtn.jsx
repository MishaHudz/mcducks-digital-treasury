import { useSearchParams } from 'react-router-dom';
import { ButtonBox, ButtonExIn } from './ExpenceIncomeBtn.styled';
import { useEffect, useState } from 'react';

function ExpenseIncomeBtn() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeStyleIncome, setActiveStyleIncome] = useState({});
  const [activeStyleExpenses, setActiveStyleExpenses] = useState({
    color: '#60c470',
    filter: 'brightness(1.2)',
  });

  function onIncomeButtonClick() {
    setSearchParams({ operation: 'income' });
  }

  function onExpencesButtonClick() {
    setSearchParams({ operation: 'expences' });
  }

  useEffect(() => {
    const activeBtn = searchParams.get('operation');

    if (activeBtn === 'expences') {
      setActiveStyleIncome({});
      setActiveStyleExpenses({ color: '#60c470', background: '#383847' });
    }
    if (activeBtn === 'income') {
      setActiveStyleExpenses({});
      setActiveStyleIncome({ color: '#60c470', background: '#383847' });
    }
  }, [searchParams]);

  // function onLogButtonClick() {
  //     console.log(searchParams.get('operation'));
  //     const activeBtn = searchParams.get('operation');
  // }

  return (
    <>
      <ButtonBox>
        <ButtonExIn onClick={onExpencesButtonClick} style={activeStyleExpenses}>
          Expenses
        </ButtonExIn>
        <ButtonExIn onClick={onIncomeButtonClick} style={activeStyleIncome}>
          Income
        </ButtonExIn>
      </ButtonBox>
    </>
  );
}

export default ExpenseIncomeBtn;
