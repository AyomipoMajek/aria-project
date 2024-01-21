import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import arialLogo from '../assets/ariaLogo.svg';

const Home = () => (
  <div>
    <Navbar arialLogo={arialLogo} />
    <Heroimg />
  </div>
);

export default Home;
