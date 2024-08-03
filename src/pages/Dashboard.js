// src/pages/Dashboard.js
import React from 'react';
import LineChartWidget from '../components/widgets/LineChartWidget';
import BarChartWidget from '../components/widgets/BarChartWidget';
import PieChartWidget from '../components/widgets/PieChartWidget';
import ActivityFeed from '../components/widgets/ActivityFeed';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <LineChartWidget />
      <BarChartWidget />
      <PieChartWidget />
      <ActivityFeed />
    </div>
  );
};

export default Dashboard;
