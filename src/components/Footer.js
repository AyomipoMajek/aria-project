import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import ariaLogo from '../assets/ariaLogo.svg';
import ig from '../assets/ig.svg';
import linkedn from '../assets/linkedn.svg';
import tweet from '../assets/tweet.svg';
import './footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footerTop" />
    <img className="footer-arial-logo" src={ariaLogo} alt="aria logo" />
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
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          hello@ariaprojectsltd.com
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          +234 (0)8102691145
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          +1(801) 428-9257
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
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
);

export default Footer;
