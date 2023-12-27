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
import { monthChart } from '../../config/conf';
import { randomIntFromInterval } from '../../utility/Function';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
const BarChart = () => {

    const labels = monthChart;

    const data = {
        labels,
        datasets: [
            {
                label: 'داده های اول',
                data: labels.map(() => randomIntFromInterval(20,40)),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'داده های دوم',
                data: labels.map(() => randomIntFromInterval(50,80)),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    }
    return (
        <>
            <Bar options={options} data={data} />
        </>
    )
}

export default BarChart
