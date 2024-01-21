import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ariLogo from '../assets/ariLogo.svg';
import './navbar.css';

const Navbar = ({ arialLogo }) => {
  const [click, setClick] = useState(false);
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const location = useLocation();

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth < 768);
  //   };
  //   handleResize();

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const handleClick = () => setClick(!click);

  // const handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     handleClick();
  //   }
  // };

  // const getIconAndItemColor = () => {
  //   if (location.pathname === '/' || location.pathname === '/contact') {
  //     return { color: '#fff' };
  //   }
  //   return { color: '#000' };
  // };

  // const getNavMenuColor = () => (isMobile && click
  //   ? { filter: 'brightness(1) invert(0)' }
  //   : { color: '#fff' });

  return (
    <div>
      {click ?
      <div>
      <Link to="/">
                <img
                  className="arial-logo"
                  src={arialLogo}
                  alt="arial logo"
                />
              </Link>
              <div
                className="menu-icon"
                role="button"
                onClick={()=> setClick(false)}
                onKeyDown={handleKeyDown}
                tabIndex={0}
              >
                <FaTimes className="hamicon" style={getNavMenuColor()} />

              </div>
              <ul className={`navmenu ${click ? 'active' : ''}`} style={getNavMenuColor()}>
                <li className="border" />
                <li className="each">
                  <Link to="/">
                    Home
                  </Link>
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
      <div className="theNav">
              <Link to="/">
                <img
                  className="arial-logo"
                  src={ariLogo}
                  alt="arial logo"
                />
              </Link>
              <div
                className="menu-icon"
                role="button"
                onClick={() =>setClick(true)}
                onKeyDown={handleKeyDown}
                tabIndex={0}
              >
                <FaTimes className="hamicon" style={getNavMenuColor()} />

              </div>
              <ul className={`navmenu ${click ? 'active' : ''}`} style={getNavMenuColor()}>
                <li className="border" />
                <li className="each">
                  <Link to="/">
                    Home
                  </Link>
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
  </div>
  );
};

export default Navbar;
