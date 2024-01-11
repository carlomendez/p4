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
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: 'Samples Completed',
    },
  },
};

const labels = ['May 2021', 'Jun 2021', 'Jul 2021', 'Aug 2021'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [340, 260, 320, 190],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const GraphCard6 = () => {

  return (
    <div className="prompt_card">
      <Bar options={options} data={data} />
    </div>
  )
}

export default GraphCard6