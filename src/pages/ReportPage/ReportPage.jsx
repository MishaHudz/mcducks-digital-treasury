import BarChart from 'components/BarChart/BarChart';
import FinancialSummary from './FinancialSummary/FinancialSummary';
import PeriodSummary from './PeriodSummary/PeriodSummary';

function ReportPage() {
  return (
    <div>
      <div>Report Page</div>
      
      <FinancialSummary />
      <PeriodSummary />
      <BarChart />
    </div>
  );
}

export default ReportPage;
