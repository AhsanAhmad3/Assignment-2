// src/App.js
import React, { useEffect } from 'react';
import Dashboard from './components/Dashboard'; // Adjust the path accordingly
// import BrowserStats from './BrowserStats'; // Remove this line
import BrowserUsage from './BrowserUsage'; // Import the BrowserUsage component
import 'bootstrap/dist/css/bootstrap.min.css'; // Optional: for Bootstrap styling
import './App.css'; // You can style the app using this file
import feather from 'feather-icons';

function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5">Dashboard</h1>
        <Dashboard />
        <h1 className="mt-5">Browser Usage</h1>
        <BrowserUsage /> {/* Integrate the BrowserUsage component */}
      </div>
    </div>
  );
}

export default App;
