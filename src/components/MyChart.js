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
      options: {
        ...options,
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    return () => {
      chartInstanceRef.current.destroy();
    };
  }, [data, options]);

  return <div className="w-full h-64 sm:h-96"><canvas ref={chartRef} /></div>;
};

export default MyChart;
    
