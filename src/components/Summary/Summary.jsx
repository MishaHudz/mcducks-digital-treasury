import {
  SummaryAmount,
  SummaryListItem,
  SummaryText,
  SummaryWrapper,
} from './Summary.styled';
import { SummaryTitle } from './Summary.styled';
import { SummaryList } from './Summary.styled';
export const Summary = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return (
    <SummaryWrapper>
      <SummaryTitle>Summary</SummaryTitle>
      <SummaryList>
        {months.map(month => {
          return (
            <SummaryListItem>
              <SummaryText>{month}</SummaryText>
              <SummaryAmount>10000.00</SummaryAmount>
            </SummaryListItem>
          );
        })}
      </SummaryList>
    </SummaryWrapper>
  );
};
