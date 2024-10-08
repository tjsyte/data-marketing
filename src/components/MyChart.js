import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js';

const MyChart = ({ data, options }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    
    chartInstanceRef.current = new ChartJS(chartRef.current, {
      type: 'line', 
      data,
      options,
    });

    return () => {
      chartInstanceRef.current.destroy(); /
    };
  }, [data, options]); 

  return <canvas ref={chartRef} />;
};

export default MyChart;
