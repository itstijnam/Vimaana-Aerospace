import React, { useState, useEffect } from 'react'
import './Header.scss'
import { useNavigate, useLocation } from 'react-router-dom'
import LOGO from '/icon/Logo.png'

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [clickedItem, setClickedItem] = useState(null);

  const handleNavClick = (path) => {
    if (location.pathname !== path) {
      setClickedItem(path);
      setTimeout(() => navigate(path), 300); // Delay to show animation
    }
  };

  useEffect(() => {
    setClickedItem(null); // Reset after navigation
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className='header'>
      <div className="header_container">

        <div className='header__logo'>
          <img src={LOGO} alt="Wolf and Widgets" />
        </div>

        <ul className='navBar'>
          {['/', '/about', '/shop'].map((path, index) => (
            <li
              key={index}
              onClick={() => handleNavClick(path)}
              className={`
                ${isActive(path) ? 'active' : ''} 
                ${clickedItem === path ? 'slide-animate' : ''}
              `}
            >
              {path === '/' ? 'Home' : path === '/about' ? 'About Us' : 'Shop'}
            </li>
          ))}
        </ul>

        <div className="right_nav">
          <button className="add-to-cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <a href="#" className='header__cta'>Let's Talk!</a>
        </div>
      </div>
    </div>
  )
}

export default Header;
