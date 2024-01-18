import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import arialLogo from '../assets/ariaLogo.svg';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (

    <div className="navbar">
      <div className="hamburger" onClick={handleToggleMenu}>
        <img src={arialLogo} alt="arial logo" />
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div>
        {isMenuOpen && (
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button type="button">
            Get in touch
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
