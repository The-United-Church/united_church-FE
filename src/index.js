// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/nav.css'; // Import the nav.css
import NavBar from './components/NavBar'; // Import NavBar component

const App = () => (
  <div className="App">
    <NavBar />
    <h1>Welcome to The United Church</h1>
    <p>Explore our events, follow-ups, calendar, and appointments.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
