"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Average duration (days)',
    },
  },
};

const labels = ['Sample-Received', 'Recd-Completed', 'Completed-Authorised'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [13,9.5,5.9],
      borderColor: [ 'rgb(255, 159, 64)', 'rgb(255, 159, 64)', 'rgba(54, 162, 235)'],
      backgroundColor: [
        'rgb(255, 159, 64)',
        'rgb(255, 159, 64)',
        'rgba(54, 162, 235)'
      ]
    }
  ],
};

const GraphCard1 = () => {

  return (
    <div className="prompt_card">
      <Bar options={options} data={data} />
    </div>
  )
}

export default GraphCard1