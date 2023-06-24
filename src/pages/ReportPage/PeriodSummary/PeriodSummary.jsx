import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import {СurrentAll,
  СurrentArrow,
  СurrentText,
  СurrentMonth} from './PeriodSummary.styled'

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
        <СurrentArrow><MdKeyboardArrowLeft className='current-arrow' onClick={goToPreviousMonth}></MdKeyboardArrowLeft></СurrentArrow>
          <СurrentMonth>{date.toLocaleDateString('en-US', monthOptions)} {date.getFullYear()}</СurrentMonth>
          <СurrentArrow
            className={`next-button ${isNextButtonDisabled ? 'disabled' : ''}`}
            onClick={!isNextButtonDisabled ? goToNextMonth : undefined}>
            <MdKeyboardArrowRight className='current-arrow' />
          </СurrentArrow>
        </СurrentAll>
      </СurrentText>
    
  );
};

export default PeriodSummary;
