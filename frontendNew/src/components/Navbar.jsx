
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";

import './Navbar.css';
import logo from '../assets/logo.png';


const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in
  const navigate = useNavigate();


  const handleUserIconClick = () => {
    if (isLoggedIn) {
      // If the user is logged in, do nothing (or show a dropdown if needed)
      console.log("User is logged in");
    } else {
      // Navigate to login/signup page
      navigate('/auth');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Log out the user
    alert('You have been logged out!');
  };

  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="auth-section">
        <FaUserCircle
          size={28}
          className="user-icon"
          onClick={handleUserIconClick}
          style={{ cursor: 'pointer', color: '#ed6226' }}
        />
        {isLoggedIn && (
          <button className="logout-button" onClick={handleLogout}>
            Log Out
          </button>
        )}
      </div>
    
    </header>
  );
};

export default Navbar;







