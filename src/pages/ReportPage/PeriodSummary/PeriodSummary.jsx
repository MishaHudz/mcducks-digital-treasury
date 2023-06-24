import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { СurrentAll, СurrentText, СurrentMonth } from './PeriodSummary.styled';
import { ButtonChange } from 'components/ChangeIncomExpense/ChangeIncomExpense.styled';

const PeriodSummary = ({ currentDate, date, setDate }) => {
  const goToPreviousMonth = () => {
    const previousMonth = new Date(
      date.getFullYear(),
      date.getMonth() - 1,
      date.getDate()
    );
    setDate(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate()
    );
    setDate(nextMonth);
  };

  const monthOptions = { month: 'long' };
  const isNextButtonDisabled =
    date.getMonth() === currentDate.getMonth() &&
    date.getFullYear() === currentDate.getFullYear();

  return (
    <СurrentText>
      Current period:
      <СurrentAll>
        <ButtonChange onClick={goToPreviousMonth}>
          <MdKeyboardArrowRight size="26" color="green" />
        </ButtonChange>
        <СurrentMonth>
          {date.toLocaleDateString('en-US', monthOptions)} {date.getFullYear()}
        </СurrentMonth>
        <ButtonChange
          onClick={!isNextButtonDisabled ? goToNextMonth : undefined}
          className={`next-button ${isNextButtonDisabled ? 'disabled' : ''}`}
        >
          <MdKeyboardArrowLeft size="26" color="green" />
        </ButtonChange>
      </СurrentAll>
    </СurrentText>
  );
};

// onClick = { goToPreviousMonth };

// className={`next-button ${isNextButtonDisabled ? 'disabled' : ''}`}
//             onClick={!isNextButtonDisabled ? goToNextMonth : undefined}>
export default PeriodSummary;
