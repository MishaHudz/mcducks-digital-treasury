import { useSearchParams } from 'react-router-dom';
import { ButtonBox, ButtonExIn } from './ExpenceIncomeBtn.styled';
import { useEffect } from 'react';

let activeStyleIncome = {};
let activeStyleExpenses = { color: '#60c470', filter: 'brightness(1.2)' };

function ExpenseIncomeBtn() {
  const [searchParams, setSearchParams] = useSearchParams();

  function onIncomeButtonClick() {
    setSearchParams({ operation: 'income' });
  }

  function onExpencesButtonClick() {
    setSearchParams({ operation: 'expences' });
  }

  useEffect(() => {
    const activeBtn = searchParams.get('operation');
    // if (!activeBtn) return;

    if (activeBtn === 'expences') {
      console.log(searchParams.get('operation'));
      activeStyleIncome = {};
      activeStyleExpenses = {
        color: '#60c470',
        background: '#383847',
      };
    }
    if (activeBtn === 'income') {
      console.log(searchParams.get('operation'));
      activeStyleExpenses = {};
      activeStyleIncome = {
        color: '#60c470',
        background: '#383847',
      };
    }
  });

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
