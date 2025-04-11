


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUserCircle } from "react-icons/fa";
// import { useCart } from './CartContext';
// import { useTranslation } from 'react-i18next';
// import './Navbar.css';
// import logo from '../assets/city.jpg';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const { cartItems } = useCart();
//   const { t, i18n } = useTranslation();

//   const handleUserIconClick = () => {
//     if (isLoggedIn) {
//       console.log("User is logged in");
//     } else {
//       navigate('/auth');
//     }
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     alert('You have been logged out!');
//   };

//   const handleLanguageChange = (e) => {
//     i18n.changeLanguage(e.target.value);
//   };

//   return (
//     <header className="navbar">
//       <img src={logo} alt="Logo" className="logo" />

//       <nav>
//         <ul className="nav-links">
//           <li><Link to="/">{t('nav.home')}</Link></li>
//           <li><a href="#services">{t('nav.services')}</a></li>
//           <li><Link to="/destination">{t('nav.shop')}</Link></li>
//           <li><Link to="/booking">{t('nav.booking')}</Link></li>
//           <li><Link to="/contact">{t('nav.contact')}</Link></li>
//           <li><Link to="/about-us">{t('nav.about')}</Link></li>
//         </ul>
//       </nav>

//       <div className="user-controls">
//         {/* Language Selector */}
//         <select
//           className="lang-select"
//           value={i18n.language}
//           onChange={handleLanguageChange}
//         >
//           <option value="en"> EN</option>
//           <option value="fi"> FI</option>
//         </select>

//         {/* Cart */}
//         <Link to="/cart" className="cart-link" data-count={cartItems.length}>
//           🛒 {t('nav.cart')} ({cartItems.length})
//         </Link>

//         {/* User Icon */}
//         <FaUserCircle
//           size={28}
//           className="user-icon"
//           onClick={handleUserIconClick}
//           style={{ cursor: 'pointer', color: '#ed6226' }}
//         />

//         {isLoggedIn && (
//           <button className="logout-button" onClick={handleLogout}>
//             Log Out
//           </button>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;

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
          <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>{t("nav.about")}</Link></li>
        </ul>
      </nav>

      <div className="user-controls">
        <select className="lang-select" value={language} onChange={handleLanguageChange}>
          <option value="EN">EN</option>
          <option value="FI">FI</option>
        </select>

        <Link to="/cart" className="cart-link">
          🛒 {t("")} ({cartItems.length})
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

