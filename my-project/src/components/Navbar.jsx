

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
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
      <div className="auth-buttons">
        <Link to="/signup">
          <button className="signup">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login">Log In</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;

