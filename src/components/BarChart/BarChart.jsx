import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BarChartContainer } from './BarChart.styles';
import { sortData } from 'components/helpers/BarChartHelpers';

const data = {
  total: 1200,
  Вазон: 150,
  Картина: 300,
  Кран: 1500,
  Чайник: 2000,
  Штори: 5000,
  Диван: 15000,
};

function BarChart() {
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
        color: '#C7CCDC',
        formatter: value => `${value} UAH`,
      },
    },
  };

  const barChartData = {
    labels: Object.keys(sortData(data)).slice(1),
    datasets: [
      {
        label: '',
        data: Object.values(sortData(data)).slice(1),
        backgroundColor: ['green', 'grey', 'grey'],
        borderRadius: 8,
      },
    ],
  };
  //////////////////////////////
  return (
    <BarChartContainer>
      <Bar data={barChartData} options={options} plugins={[ChartDataLabels]} />
    </BarChartContainer>
  );
}

export default BarChart;
