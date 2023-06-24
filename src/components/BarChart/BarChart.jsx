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
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { categoryTranslationRuToEn } from 'components/AddTransaction/TranslateFunc';

function BarChart() {
  const [data, setData] = useState({});
  const [searchParams] = useSearchParams();
  const [operation, setOperation] = useState('expenses');
  const [category, setCategory] = useState(searchParams.get('category'));

  const transactionExpense = useSelector(
    state => state.transaction.transactionExpense
  );

  const transactionIncome = useSelector(
    state => state.transaction.transactionIncome
  );

  useEffect(() => {
    setOperation(searchParams.get('operation'));
    setCategory(searchParams.get('category'));
  }, [searchParams]);

  useEffect(() => {
    if (operation === 'expenses' && category) {
      if (
        !transactionExpense ||
        !Object.keys(transactionExpense.expensesData).length
      ) {
        setData({});
        return;
      }

      const categoriesArr = Object.entries(transactionExpense.expensesData);

      categoriesArr.map(cat => {
        if (categoryTranslationRuToEn(cat[0]) === category) {
          setData(cat[1]);
        }

        return cat;
      });
    }
  }, [operation, category, transactionExpense]);

  useEffect(() => {
    if (operation === 'income' && category) {
      if (
        !transactionIncome ||
        !Object.keys(transactionIncome.incomesData).length
      ) {
        setData({});
        return;
      }

      const categoriesArr = Object.entries(transactionIncome.incomesData);
      categoriesArr.map(cat => {
        if (categoryTranslationRuToEn(cat[0]) === category) {
          setData(cat[1]);
        }

        return cat;
      });
    }
  }, [operation, category, transactionIncome]);

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
        labels: {
          label1: {
            anchor: 'start',
            align: 'top',
            offset: 5,

            color: '#C7CCDC',
            formatter: (value, context) => {
              const label1 = `                      ${
                context.chart.data.labels[context.dataIndex]
              }`;

              return `${label1} `;
            },
            font: {
              family: 'Roboto',
              size: 10,
            },
          },
          label2: {
            anchor: 'end',
            align: 'top',
            offset: 5,
            color: '#C7CCDC',
            formatter: (value, context) => {
              const label2 = `${value} UAH`;
              return ` ${label2}            `;
            },
            font: {
              family: 'Roboto',
              size: 12,
            },
          },
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
    data && (
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
