import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import React from 'react';
import { monthChart } from '../../config/conf';
import { randomIntFromInterval } from '../../utility/Function';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

 

//const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   tension: 0.5,
//   datasets: [
//     {
//       fill: true,
//       label: 'Dataset 2',
//       data: labels.map(() => randomIntFromInterval(0,100)),
//       borderColor: 'rgb(53, 162, 235)',
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },

//     {
//       fill: true,
//       label: 'Dataset 2',
//       data: labels.map(() => randomIntFromInterval(0,100)),
//       borderColor: 'rgb(255 99 132)',
//       backgroundColor: 'rgb(255 99 132)',
//     },
//   ],
// };

export default function AreaChart(props:any) {
  
  const {
    labels=monthChart,
    datasets=[
      {
        fill: true,
        label: 'Dataset 2',
        data: labels.map(() => randomIntFromInterval(0,100)),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
  
      {
        fill: true,
        label: 'Dataset 2',
        data: labels.map(() => randomIntFromInterval(0,100)),
        borderColor: 'rgb(255 99 132)',
        backgroundColor: 'rgb(255 99 132)',
      },
    ],
  }=props;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
      },
    },
  }
 
  const data={
    labels,
    tension: 0.5,
    datasets,
  }
  return <Line options={options} data={data} />;
}
