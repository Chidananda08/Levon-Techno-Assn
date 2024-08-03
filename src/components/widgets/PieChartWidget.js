// src/components/widgets/PieChartWidget.js
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import './PieChartWidget.css';

const PieChartWidget = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/user-activity')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="pie-chart-widget">
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default PieChartWidget;
