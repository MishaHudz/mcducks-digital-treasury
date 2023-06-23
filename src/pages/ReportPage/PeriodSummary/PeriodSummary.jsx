import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

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
    <div>
      <div className="current-text">
        Current period:
        <div className="current-all">
          <MdKeyboardArrowLeft
            className="current-arrow"
            onClick={goToPreviousMonth}
          ></MdKeyboardArrowLeft>
          <p className="current-month">
            {date.toLocaleDateString('en-US', monthOptions)}{' '}
            {date.getFullYear()}
          </p>
          <span
            className={`next-button ${isNextButtonDisabled ? 'disabled' : ''}`}
            onClick={!isNextButtonDisabled ? goToNextMonth : undefined}
          >
            <MdKeyboardArrowRight className="current-arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PeriodSummary;
