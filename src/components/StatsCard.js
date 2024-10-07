import React from 'react';

const StatsCard = ({ title, value, icon, change, changeType, description }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="col-auto">
            <div className="stat text-primary">
              <i className={`align-middle`} data-feather={icon}></i>
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">{value}</h1>
        <div className="mb-0">
          <span className={`text-${changeType === 'increase' ? 'success' : 'danger'}`}>
            <i className="mdi mdi-arrow-bottom-right"></i> {change}
          </span>
          <span className="text-muted"> {description}</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
