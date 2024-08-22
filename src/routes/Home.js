import React from 'react';
import Navbar from '../components/Navbar';
import Heroimg from '../components/Heroimg';
import arialLogo from '../assets/ariaLogo.svg';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <Navbar arialLogo={arialLogo} />
    <Heroimg />
    <Footer />
  </div>
);

export default Home;
