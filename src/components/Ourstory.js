import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import whoweare from '../assets/whoweare.svg';
import mission from '../assets/mission.svg';
import valuesLogo from '../assets/valuesLogo.svg';

const Ourstory = () => (
  <div className="ourstory">
    <div className="aboutUs">
      <div className="who">
        <h3>About Us</h3>
        <h1>Who we are</h1>
        <p>
          We are a team of exprienced proffessionals who are passionate about bringing your
          vision to life. From conceptualization to execution, we specoialize in transforming
          ideas into successful projects that exceed your expectations. With out attention to detail
          and commitment to excellence, we are here to provide solutions to make your project a
          resounding success
        </p>
        <img src={whoweare} alt="whoweare" />
      </div>

      <div className="mission">
        <h2>Our mission</h2>
        <p>
          Our mission is to help our clients make distinctive and sustainable
          improvements by providing xceptional project management, event planning,
          and business consulting services.
        </p>
        <img src={mission} alt="lady on laptop" />
        <p>
          Ultimately, our goal is to provide comprehensive and seamless experience
          for our clients, empowering businesses to reach their full potential and
          create positive change in the world.
        </p>
      </div>
    </div>

    <div className="coreValues">
      <h1>Our core values</h1>
      <div className="accountability">
        <div className="imgh3">
          <img src={valuesLogo} alt="valuesLogo" />
          <h3>Accountability</h3>
        </div>
        <p>
          Accountability is ingrained in our company culture. We are committed
          to communicating our progress, openly addressing any issues, and taking
          the necessary steps to rectify them.
        </p>
      </div>
      <div className="integrity">
        <div className="imgh3">
          <img src={valuesLogo} alt="valuesLogo" />
          <h3>Integrity</h3>
        </div>
        <p>
          At Aria, we pride ourselves on upholding the highest standards of
          integrity in eveything we do. We are committed to treating everyone
          with fairness, respect, and trust.
        </p>
      </div>
      <div className="transparency">
        <div className="imgh3">
          <img src={valuesLogo} alt="valuesLogo" />
          <h3>Transparency</h3>
        </div>
        <p>
          We strive to provide clear and comprehensive information, ensuring
          that our clients have a complete understanding of our processes,
          methodologies, and deliverables.
        </p>
      </div>
    </div>

    <div className="discover">
      <div className="discoverUs">
        <h1>Discover effective resolutions to your challenges alongside Aria.</h1>
        <p>
          Make a smart move towards your objectives by engaging our services to
          create impactful and innovative solutions for your projects.
        </p>
        <button type="button">
          Get in touch
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  </div>
);

export default Ourstory;
