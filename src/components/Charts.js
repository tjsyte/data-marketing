import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2'; 

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const Charts = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Sales Data',
        data: data.map(item => item.sales),
        backgroundColor: [
          'rgba(44, 62, 80, 0.7)', 
          'rgba(52, 152, 219, 0.7)',
          'rgba(231, 76, 60, 0.7)', 
          'rgba(46, 204, 113, 0.7)',
          'rgba(155, 89, 182, 0.7)',
          'rgba(241, 196, 15, 0.7)',
        ],
        borderColor: [
          'rgba(44, 62, 80, 1)', 
          'rgba(52, 152, 219, 1)',
          'rgba(231, 76, 60, 1)',
          'rgba(46, 204, 113, 1)',
          'rgba(155, 89, 182, 1)',
          'rgba(241, 196, 15, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div id="charts" className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="sm:col-span-2">
        <h2 className="text-xl mb-4">Bar Chart</h2>
        <Bar data={chartData} />
      </div>

      <div className="sm:col-span-1">
        <h2 className="text-xl mb-4">Pie Chart</h2>
        <Pie data={chartData} />
      </div>

      <div className="sm:col-span-2">
        <h2 className="text-xl mb-4">Line Chart</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Charts;
