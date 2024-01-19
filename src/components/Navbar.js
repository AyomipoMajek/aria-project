import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import arialLogo from '../assets/ariaLogo.svg';
import './navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className={click ? 'navbar active' : 'navbar'}>
      <Link to="/">
        <img className="arial-logo" src={arialLogo} alt="arial logo" />
      </Link>
      <div
        className="menu-icon"
        role="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        {click ? (
          <FaTimes className="hamicon" />
        ) : (
          <FaBars className="hamicon" style={{ color: '#fff' }} />
        )}
      </div>
      <ul className={click ? 'navmenu active' : 'navmenu'}>
        <li className="border" />
        <li className="each">
          <Link to="/">Home</Link>
        </li>
        <li className="border" />
        <li className="each">
          <Link to="/about">About</Link>
        </li>
        <li className="border" />
        <li className="each">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="border" />
        <button className="get-button" type="button">
          Get in touch
          <FontAwesomeIcon className="rightarrow" icon={faArrowRight} />
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
