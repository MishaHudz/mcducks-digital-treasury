import { useEffect } from 'react';
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';

const ChangeIncomExpense = () => {
  const [text, setText] = useState('EXPENSES');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = () => {
    setText(prev =>
      prev === 'EXPENSES' ? setText('INCOME') : setText('EXPENSES')
    );
  };
  useEffect(() => {
    console.log(text);
    setSearchParams({
      operation: text.toLocaleLowerCase(),
      category: searchParams.get('category'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <div>
      <button onClick={handleChange}>
        <MdKeyboardArrowLeft size="26" color="green" />
      </button>
      <p>{text}</p>
      <button onClick={handleChange}>
        <MdKeyboardArrowRight size="26" color="green" />
      </button>
    </div>
  );
};

export default ChangeIncomExpense;
