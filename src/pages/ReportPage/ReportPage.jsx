import BarChart from 'components/BarChart/BarChart';
import {
  ReportBox,
  ReportMiddleBox,
  Section,
  SectionDiv,
  SectionImage,
  TestBox,

} from './ReportPage.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PeriodSummary from './PeriodSummary/PeriodSummary';
import FinancialSummary from './FinancialSummary/FinancialSummary';
import TransactionPeriodData from 'components/TransactionPeriodData/TransactionPeriodData';
import { GoToMain } from 'components/goBack/goToMain';
import BalanceCenter from 'components/BalanceCenter/BalanceCenter';

import MediaQuery from 'react-responsive';


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
            <GoToMain />

            <MediaQuery maxWidth={767}>

              <PeriodSummary
                currentDate={currentDate}
                date={date}
                setDate={setDate}
              />
            </MediaQuery>

            <BalanceCenter />
            <MediaQuery minWidth={768}>
              <PeriodSummary
                currentDate={currentDate}
                date={date}
                setDate={setDate}
              />
            </MediaQuery>
          </TestBox>
          <ReportBox>
            <FinancialSummary selectedMonth={date} />
            <ReportMiddleBox>
              <TransactionPeriodData selectedMonth={date} />
            </ReportMiddleBox>
            <BarChart />
          </ReportBox>
        </SectionDiv>
      </SectionImage>
    </Section>
  );
}

export default ReportPage;
