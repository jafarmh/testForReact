import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import React from 'react';
import { monthChart } from '../../config/conf';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = monthChart;

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => 5),
      backgroundColor: '#CC3333',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => 10),
      backgroundColor: '#5C6086',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => 5),
      backgroundColor: '#d3a12f',
      stack: 'Stack 0',
      //stack: 'Stack 1',
    },
  ],
};

export default function GroupedBarChart() {
  return <Bar options={options} data={data} />;
}
