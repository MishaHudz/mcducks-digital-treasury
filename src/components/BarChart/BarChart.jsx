import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BarChartContainer } from './BarChart.styles';
import { getGradient, sortData } from 'components/helpers/BarChartHelpers';

const data = {
  total: 125500,
  Вазон: 1500,
  Картина: 2000,
  Чайник: 5000,
  Штори: 7000,
  Крісло: 6000,
  Кран: 3500,
  Диван: 10000,
};

function BarChart() {
  const options = {
    animation: false,
    layout: {
      padding: {
        top: 25,
      },
    },
    scales: {
      x: {
        ticks: {
          display: true,
          color: '#C7CCDC',
          font: {
            size: 12,
          },
        },
        barThickness: 15,
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: '#474759',
          lineWidth: 2,
        },
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
        data: Object.values(sortData(data)).slice(1),
        backgroundColor: context => {
          const chart = context.chart;
          const { chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          if (context.dataIndex === 0 || context.dataIndex % 3 === 0) {
            return getGradient(chart, context.element, '#60C470', '#383C46');
          }
          if (context.dataIndex !== -1) {
            return getGradient(chart, context.element, '#5B5B6D', '#373745');
          }
        },
        borderRadius: 8,
        maxBarThickness: 38,
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
