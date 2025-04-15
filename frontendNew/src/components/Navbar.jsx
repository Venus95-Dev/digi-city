import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import logo from '../assets/city.jpg';
import { useCart } from './CartContext';
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    const newLang = e.target.value.toLowerCase();
    setLanguage(e.target.value);
    i18n.changeLanguage(newLang);
  };

  const handleUserIconClick = () => {
    if (isLoggedIn) {
      console.log("User is logged in");
    } else {
      navigate('/auth');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert('You have been logged out!');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setMenuOpen(false); // Close menu on mobile
    }
  };

  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>{t("nav.home")}</Link></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>{t("nav.services")}</a></li>
          <li><Link to="/destination" onClick={() => setMenuOpen(false)}>{t("nav.shop")}</Link></li>
          <li><Link to="/booking" onClick={() => setMenuOpen(false)}>{t("nav.booking")}</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{t("nav.contact")}</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>{t("About")}</Link></li>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
            />
          </div>
        </ul>
      </nav>

      <div className="user-controls">
        <select className="lang-select" value={language} onChange={handleLanguageChange}>
          <option value="EN">EN</option>
          <option value="FI">FI</option>
        </select>

        <Link to="/cart" className="cart-link">
          🛒 {t('nav.cart')} ({cartItems.length})
        </Link>

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
