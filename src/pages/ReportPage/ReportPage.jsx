import BarChart from 'components/BarChart/BarChart';
import {
  ReportBox,
  ReportMiddleBox,
  Section,
  SectionDiv,
  SectionImage,
  TestBox,
  TestBoxMonth,
  TestButton,
  TestTitle,
} from './ReportPage.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PeriodSummary from './PeriodSummary/PeriodSummary';
import FinancialSummary from './FinancialSummary/FinancialSummary';
import TransactionPeriodData from 'components/TransactionPeriodData/TransactionPeriodData';

function ReportPage() {
  const { accessToken } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

 
  useEffect(() => {
    !accessToken && navigate('/authorization');
  }, [accessToken, navigate]);

  return (
    <Section>
      <SectionImage>
        <SectionDiv>
          <TestBox>
            <TestTitle>Balance:</TestTitle>
            <TestButton>00.00 UAH</TestButton>
            <TestButton>Confirm</TestButton>
            <TestBoxMonth>
              <PeriodSummary currentDate={currentDate} date={date} setDate={setDate} />
            </TestBoxMonth>
          </TestBox>
          <ReportBox>
            <FinancialSummary selectedMonth={date} />
            <ReportMiddleBox>
              <TransactionPeriodData />
            </ReportMiddleBox>
            <BarChart />
          </ReportBox>
        </SectionDiv>
      </SectionImage>
    </Section>
  );
}

export default ReportPage;
