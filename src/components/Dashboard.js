import React from 'react';
import StatsCards from './StatsCards'; // Adjust the import path as needed
import ChartComponent from './ChartComponent'; // Adjust the import path as needed

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col-xl-6 col-xxl-5 d-flex">
        <div className="w-100">
          <StatsCards />
        </div>
      </div>
      <div className="col-xl-6 col-xxl-7">
        <ChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
