"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Completed-Authorized',
    },
  },
};

export const data = {
  labels: ['Delayed-42%', 'On Time-58%'],
  datasets: [
    {
      label: '',
      data: [42, 58],
      backgroundColor: [
        'rgb(255, 159, 64)', 'rgba(54, 162, 235)'
      ],
      borderColor: [
        'rgb(255, 159, 64)', 'rgba(54, 162, 235)'
      ],
      borderWidth: 1,
    },
  ],
};

const GraphCard3 = () => {

  return (
    <div className="prompt_card">
      <Doughnut options={options} data={data} />
    </div>
  )
}

export default GraphCard3