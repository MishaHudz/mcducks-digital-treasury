import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart } from 'chart.js/auto';
import MediaQuery from 'react-responsive';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { BarChartContainer } from './BarChart.styles';
import {
  getGradient,
  getMobileGradient,
  sortData,
} from 'components/helpers/BarChartHelpers';

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
        // barThickness: 15,
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

  const mobileOptions = {
    maintainAspectRatio: false,
    // animation: false,
    indexAxis: 'y',
    layout: {
      padding: {
        top: 25,
        right: 10,
        left: -8,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },

        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
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
        align: 'top',
        offset: 5,
        color: '#C7CCDC',
        formatter: (value, context) =>
          `${context.chart.data.labels[context.dataIndex]} ${value} UAH`,
        font: {
          family: 'Roboto',
          size: 10,
        },
      },
    },
  };

  const mobileBarChartData = {
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
            return getMobileGradient(
              chart,
              context.element,
              '#60C470',
              '#383C46'
            );
          }
          if (context.dataIndex !== -1) {
            return getMobileGradient(
              chart,
              context.element,
              '#5B5B6D',
              '#373745'
            );
          }
        },
        borderRadius: 10,

        maxBarThickness: 15,
      },
    ],
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
        categoryPercentage: 1.0,
        barPercentage: 1.0,
      },
    ],
  };
  //////////////////////////////
  return (
    data.total && (
      <>
        <MediaQuery maxWidth={767}>
          <BarChartContainer>
            <Bar
              data={mobileBarChartData}
              options={mobileOptions}
              plugins={[ChartDataLabels]}
            />
          </BarChartContainer>
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <BarChartContainer>
            <Bar
              data={barChartData}
              options={options}
              plugins={[ChartDataLabels]}
            />
          </BarChartContainer>
        </MediaQuery>
      </>
    )
  );
}

export default BarChart;
