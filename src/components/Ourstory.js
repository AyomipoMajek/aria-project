import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faEnvelope, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import whoweare from '../assets/whoweare.svg';
import mission from '../assets/mission.svg';
import valuesLogo from '../assets/valuesLogo.svg';
import ariaLogo from '../assets/ariaLogo.svg';
import ig from '../assets/ig.svg';
import linkedn from '../assets/linkedn.svg';
import tweet from '../assets/tweet.svg';

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

    <div className="footer">
      <div className="footerTop" />
      <img src={ariaLogo} alt="aria logo" />
      <p>Stay ahead of the curve with Aria&apos;s creative approaches.</p>

      <div className="footerMid">
        <h4>What we do</h4>
        <ul className="offers">
          <li>Project Management</li>
          <li>Event Planning</li>
          <li>Business Consulting</li>
        </ul>
      </div>

      <div className="footerContact">
        <h4>Contact Us</h4>
        <ul className="contact">
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            hello@ariaprojectsltd.com
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            +234 (0)8102691145
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            +1(801) 428-9257
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} />
            +44 (0) 7823466355
          </li>
        </ul>
      </div>

      <div className="footerBottom">
        <h4>Support</h4>
        <ul className="support">
          <li>FAQ</li>
          <li>Get in touch</li>
        </ul>
      </div>

      <div className="socials">
        <h4>Social media</h4>
        <ul className="socialMedia">
          <li>
            <img src={ig} alt="ig logo" />
          </li>
          <li>
            <img src={linkedn} alt="linkedn logo" />
          </li>
          <li>
            <img src={tweet} alt="tweet logo" />
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Ourstory;
