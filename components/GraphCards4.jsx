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
  plugins: {
    title: {
      display: true,
      text: 'Average Duration of Processes by Group ID',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['Alajuela', 'Bengalore', 'Cartago', 'Manchester', 'San Pedro', 'San Ramon'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Sampled-Recd',
      data: [13, 12,13, 12, 12, 11],
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Recd-Completed',
      data: [9, 9, 11, 10, 9, 12],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Completed-Auth',
      data: [8, 6, 6, 5, 8, 5],
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};

const GraphCard4 = () => {

  return (
    <div className="">
      <Bar options={options} data={data} />
    </div>
  )
}

export default GraphCard4