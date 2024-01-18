import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle, faPlus, faMinus, faArrowRight, faEnvelope, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import ig from '../assets/ig.svg';
import linkedn from '../assets/linkedn.svg';
import tweet from '../assets/tweet.svg';
import ariaLogo from '../assets/ariaLogo.svg';
import './reachus.css';

const Reachus = () => {

  const [questionOpen, setQuestionOpen] = useState ({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  });

  const toggleQuestion = (question) => {
    setQuestionOpen((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };

  return (
    <div className="reachus">
      <div className="intro">
        <h1>Let&apos;s work together !</h1>
        <p>
          Our dedicated team is ready to assist you with any inquiries,
          questions, or requests you may habe. Whether you are seeking
          information about our services, want to discuss a potential
          project, or simply have a general query, we are here to help.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#ffffff' }} />
            Contact us
          </li>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#ffffff' }} />
            Great service
          </li>
        </ul>
      </div>

      <div className="form">
        <form>
          <div className="form-group">
            <h4>First name</h4>
            <input type="text" />
          </div>
          <div className="form-group">
            <h4>Last name</h4>
            <input type="text" />
          </div>
          <div className="form-group">
            <h4>Email Address</h4>
            <input type="email" />
          </div>
          <div className="phone">
            <h4>Phone number</h4>
            <input type="tel" />
          </div>
          <div className="form-group">
            <h4>Service</h4>
            <textarea />
          </div>
          <div className="message">
            <h4>Message</h4>
            <textarea />
          </div>
          <div className="send">
            <button type="submit">Send request</button>
          </div>
        </form>
      </div>

      <div className="contactDetails">
        <div className="email-add">
          <h4>Email</h4>
          <p>hello@ariaprojectsltd.com</p>
        </div>
        <div className="phone-nos">
          <h4>Phone</h4>
          <p>+234 (0)8102691145</p>
          <p>+1 (801) 428-9257</p>
          <p>+44 (0) 7823466355</p>
        </div>
        <div className="social-media">
          <h4>Social media</h4>
          <ul>
            <li className="each-socials">
              <img src={ig} alt="instagram" />
              @ariaprojectsltd
            </li>
            <li className="each-socials">
              <img src={tweet} alt="twitter" />
              @ariaprojectsltd
            </li>
            <li className="each-socials">
              <img src={linkedn} alt="linkedn" />
              @ariaprojectsltd
            </li>
          </ul>
        </div>
      </div>

      <div className="frequents">
        <h2>Frequently asked questions</h2>
        <div className="each-question">
          <h4>
            How long does a typical consulting engagement last?
          </h4>
          <FontAwesomeIcon
          icon={questionOpen.question1 ? faMinus : faPlus }
          onClick={() => toggleQuestion('question1')}
          />
          {questionOpen.question1 && 
          <p>
            The duration of a consulting engagement varies depending on the scope and
            complexity of the project. It can range from a few weeks for a specific task
            or analysis to several months for comprehensive organizational transformations.
          </p>
          }
        </div>
        <div className="each-question">
          <h4>
            How can project management service help my company
            achieve its goals?
          </h4>
          <FontAwesomeIcon
          icon={questionOpen.question2 ? faMinus : faPlus }
          onClick={() => toggleQuestion('question2')}
          />
          {questionOpen.question2 && 
          <p>
            Our project management services help organizations achieve their goals by
            providing a structured approach to planning, executing, and completing
            projects. This ensures efficient resource allocation, timely delivery,
            and successful implementation of initiatives, ultimately contributing
            to overall business success.
          </p>
          }
        </div>
        <div className="each-question">
          <h4>
            Can your company handle projcts/events of different
            scales and budgets?
          </h4>
          <FontAwesomeIcon
          icon={questionOpen.question3 ? faMinus : faPlus }
          onClick={() => toggleQuestion('question3')}
          />
          {questionOpen.question3 && 
          <p>
            Yes, our company is equipped to handle projects and events of various
            scales and budgets. We tailor our services to meet the specific needs
            of each client, whether it's a small-scale project or a large-scale event.
            Our goal is to deliver successful outcomes within the defined budget and scope.
          </p>
          }
        </div>
        <div className="each-question">
          <h4>
            How do you ensure confidentiality and data security during
            consulting engagements?
          </h4>
          <FontAwesomeIcon
          icon={questionOpen.question4 ? faMinus : faPlus }
          onClick={() => toggleQuestion('question4')}
          />
          {questionOpen.question4 && 
          <p>
            We take data security and confidentiality seriously. Our company follows
            industry best practices and implements robust security measures to protect
            client information. This includes restricted access, encryption, and adherence
            to privacy standards. We prioritize the confidentiality and security of our
            clients' data throughout the consulting engagement.
          </p>
          }
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
  )
}

export default Reachus