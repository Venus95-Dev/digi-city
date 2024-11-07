import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global CSS
import App from './App'; // Main App component

// Renders the App component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);