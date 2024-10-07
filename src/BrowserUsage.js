// src/BrowserUsage.js
import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

const BrowserUsage = () => {
    useEffect(() => {
        Chart.register(...registerables); // Register all necessary chart components

        const ctx = document.getElementById('chartjs-dashboard-pie').getContext('2d');

        const myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Chrome', 'Firefox', 'IE'],
                datasets: [{
                    label: 'Browser Usage',
                    data: [4306, 3801, 1689],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverOffset: 4,
                }],
            },
            options: {
                responsive: true,
            },
        });

        // Cleanup the chart when the component unmounts
        return () => {
            myChart.destroy();
        };
    }, []);

    return (
        <div className="card">
            <div className="card-header">
                <h5 className="card-title mb-0">Browser Usage</h5>
            </div>
            <div className="card-body d-flex">
                <div className="align-self-center w-100">
                    <div className="py-3">
                        <div className="chart chart-xs">
                            <canvas id="chartjs-dashboard-pie"></canvas>
                        </div>
                    </div>
                    <table className="table mb-0">
                        <tbody>
                            <tr>
                                <td>Chrome</td>
                                <td className="text-end">4306</td>
                            </tr>
                            <tr>
                                <td>Firefox</td>
                                <td className="text-end">3801</td>
                            </tr>
                            <tr>
                                <td>IE</td>
                                <td className="text-end">1689</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BrowserUsage;
