import React from 'react';
import LineGraph from './lineGraph';
import chartIcon from './assets/chart-icon.svg';
const Dashboard = () => {
  const data = [30, 70, 100];
  const average = [22, 30, 140];
  const labels = [1, 2, 3, 4];
  return (
    <div>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Dashboard</h1>
      </header>
      <LineGraph data={data} average={average} labels={labels} />
    </div>
  );
};

export default Dashboard;
