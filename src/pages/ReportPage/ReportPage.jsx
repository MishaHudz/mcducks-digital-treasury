import BarChart from 'components/BarChart/BarChart';
import {
  ReportBox,
  ReportMiddleBox,
  ReportTopBox,
  Section,
  SectionDiv,
  SectionImage,
  TestBox,
  TestBoxCurrentMonth,
  TestBoxMonth,
  TestBoxSpanMonth,
  TestButton,
  TestCurrentMonthName,
  TestTitle,
  TestTitleMonth,
} from './ReportPage.styled';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ReportPage() {
  const { accessToken } = useSelector(state => state.auth);
  const navigate = useNavigate();

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
              <TestTitleMonth>Current period:</TestTitleMonth>
              <TestBoxCurrentMonth>
                <TestBoxSpanMonth>&#60;</TestBoxSpanMonth>
                <TestCurrentMonthName>November</TestCurrentMonthName>
                <TestBoxSpanMonth>&#62;</TestBoxSpanMonth>
              </TestBoxCurrentMonth>
            </TestBoxMonth>
          </TestBox>

          <ReportBox>
            <ReportTopBox></ReportTopBox>
            <ReportMiddleBox></ReportMiddleBox>
            <BarChart />
          </ReportBox>
        </SectionDiv>
      </SectionImage>
    </Section>
  );
}

export default ReportPage;
