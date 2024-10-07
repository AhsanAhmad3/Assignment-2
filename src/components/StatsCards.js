import React from 'react';
import StatsCard from './StatsCard'; // Adjust the import path as needed

const StatsCards = () => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <StatsCard
          title="Sales"
          value="2,382"
          icon="truck"
          change="-3.65%"
          changeType="decrease"
          description="Since last week"
        />
        <StatsCard
          title="Visitors"
          value="14,212"
          icon="users"
          change="5.25%"
          changeType="increase"
          description="Since last week"
        />
      </div>
      <div className="col-sm-6">
        <StatsCard
          title="Earnings"
          value="$21,300"
          icon="dollar-sign"
          change="6.65%"
          changeType="increase"
          description="Since last week"
        />
        <StatsCard
          title="Orders"
          value="64"
          icon="shopping-cart"
          change="-2.25%"
          changeType="decrease"
          description="Since last week"
        />
      </div>
    </div>
  );
};

export default StatsCards;
