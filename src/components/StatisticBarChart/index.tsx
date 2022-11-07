import React from 'react';

import {
  CategoryScale,
  Chart,
  ChartData,
  ChartOptions,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import baseTheme from '../../styles/theme';

interface StatisticChartProps {
  data: Array<{ name: string; values: Array<number> }>;
  xAxisNames: Array<string>;
}

function StatisticBarChart({ data, xAxisNames }: StatisticChartProps) {
  Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

  const options: ChartOptions<'line'> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
          font: {
            size: 16,
            family: 'RoundedMplus1c Regular',
          },
        },
        grid: {
          display: false,
          borderColor: 'black',
          borderWidth: 2,
          tickColor: 'white',
          tickLength: 0,
          drawTicks: false,
        },
      },
      x: {
        ticks: {
          stepSize: 1,
          font: {
            size: 16,
            family: 'RoundedMplus1c Regular',
          },
        },
        grid: {
          display: false,
          borderColor: 'black',
          borderWidth: 2,
          tickColor: 'white',
          tickLength: 0,
          drawTicks: false,
        },
      },
    },
  };

  const colors = Object.values(baseTheme.color).sort(() => Math.random() - 0.5);

  const chartData: ChartData<'line'> = {
    labels: xAxisNames,
    datasets: data.map(({ name, values }, index) => ({
      label: name,
      fill: true,
      data: values,
      borderColor: 'gray',
      backgroundColor: colors[index] + '66',
      pointStyle: 'circle',
      pointRadius: 5,
      tension: 0.5,
    })),
  };

  return (
    <>
      <Line options={options} data={chartData} />
    </>
  );
}

export default StatisticBarChart;
