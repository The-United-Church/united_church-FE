// src/components/NavBar.jsx
import React from 'react';
import './../styles/nav.css'; // Import CSS file

const NavBar = () => {
  return (
    <nav id="desktop-nav">
      <div className="logo">The United Church</div>
      <ul className="nav-links">
        <li><a href="#events">Events</a></li>
        <li><a href="#followUps">Follow Ups</a></li>
        <li><a href="#calender">Calender</a></li>
        <li><a href="#appointments">Appointments</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
