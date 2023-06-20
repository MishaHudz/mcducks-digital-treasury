import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BarChartContainer } from './BarChart.styles';
import { sortData } from 'components/helpers/BarChartHelpers';

const data = {
  total: 125500,
  Вазон: 1500,
  Картина: 2000,
  Чайник: 5000,
  Штори: 7000,
  Кран: 3500,
  Диван: 10000,
};

function BarChart() {
  const options = {
    layout: {
      padding: {
        top: 25,
      },
    },
    scales: {
      x: {
        barThickness: 15,
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

  function getGreeenGradient(chart) {
    const {
      ctx,
      chartArea: { top, bottom },
    } = chart;
    const gradientSegment = ctx.createLinearGradient(0, bottom, 0, top);
    gradientSegment.addColorStop(0, '#383C46');
    gradientSegment.addColorStop(1, '#60C470');
    return gradientSegment;
  }

  function getDarkGradient(chart) {
    const {
      ctx,
      chartArea: { top, bottom },
    } = chart;
    const gradientSegment = ctx.createLinearGradient(0, bottom, 0, top);
    gradientSegment.addColorStop(0, '#373745');
    gradientSegment.addColorStop(1, ' #5B5B6D');
    return gradientSegment;
  }

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
            return getGreeenGradient(chart);
          }
          if (context.dataIndex !== -1) {
            return getDarkGradient(chart);
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
