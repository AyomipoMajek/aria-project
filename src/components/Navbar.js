import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import arialLogo from '../assets/ariaLogo.svg';
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const changeNavBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackground);
    return () => window.removeEventListener('scroll', changeNavBackground);
  }, []);

  const getIconAndItemColor = () => {
    if (click) {
      return '#000';
    }
    if (location.pathname === '/' || location.pathname === '/contact') {
      return '#fff';
    }
    return '#000';
  };

  const getLogoFilter = () => {
    if (click) {
      return 'brightness(1) invert(0)';
    }
    if (location.pathname === '/' || location.pathname === '/contact') {
      return 'brightness(0) invert(1)';
    }
    return 'brightness(1) invert(0)';
  };

  return (
    <div className={`navbar ${click ? 'active' : ''} ${scrollNav ? 'scroll' : ''}`}>
      <div className="wrapper">
        <Link to="/">
          <img
            className="arial-logo"
            src={arialLogo}
            alt="arial logo"
            style={{
              filter: getLogoFilter(),
            }}
          />
        </Link>
        <div
          className="menu-icon"
          role="button"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label={click ? 'Close menu' : 'Open menu'}
        >
          {click ? (
            <FaTimes
              className="hamicon"
              style={{
                color: '#000',
              }}
            />
          ) : (
            <FaBars
              className="hamicon"
              style={{
                color: getIconAndItemColor(),
              }}
            />
          )}
        </div>
        <ul className={`navmenu ${click ? 'active' : ''}`} style={{ color: getIconAndItemColor() }}>
          <li className="border" />
          <li className="each">
            <Link to="/" style={{ color: getIconAndItemColor(), borderColor: getIconAndItemColor() }}>Home</Link>
          </li>
          <li className="border" />
          <li className="each">
            <Link to="/about" style={{ color: getIconAndItemColor(), borderColor: getIconAndItemColor() }}>About</Link>
          </li>
          <li className="border" />
          <li className="each">
            <Link to="/contact" style={{ color: getIconAndItemColor(), borderColor: getIconAndItemColor() }}>Contact</Link>
          </li>
          <li className="border" />
          <button className="get-button mobile" type="button" style={{ color: getIconAndItemColor(), borderColor: getIconAndItemColor() }}>
            Get in touch
            <FontAwesomeIcon className="rightarrow" icon={faArrowRight} />
          </button>
        </ul>
        <button className="get-button desktop" type="button" style={{ color: getIconAndItemColor(), borderColor: getIconAndItemColor() }}>
          Get in touch
          <FontAwesomeIcon className="rightarrow" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
