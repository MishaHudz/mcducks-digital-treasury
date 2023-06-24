import { useSearchParams } from 'react-router-dom';
import { ButtonBox, ButtonEx, ButtonIn } from './ExpenceIncomeBtn.styled';
import { useEffect, useState } from 'react';

function ExpenseIncomeBtn() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeStyleIncome, setActiveStyleIncome] = useState({});
  const [activeStyleExpenses, setActiveStyleExpenses] = useState({
    color: '#60c470',
    filter: 'brightness(1.2)',
  });

  const operation = searchParams.get('operation');

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

  return (
    <>
      <ButtonBox>
        <ButtonEx
          isActive={operation === 'expences'}
          onClick={onExpencesButtonClick}
          style={activeStyleExpenses}
        >
          Expenses
        </ButtonEx>
        <ButtonIn
          isActive={operation === 'income'}
          onClick={onIncomeButtonClick}
          style={activeStyleIncome}
        >
          Income
        </ButtonIn>
      </ButtonBox>
    </>
  );
}

export default ExpenseIncomeBtn;
