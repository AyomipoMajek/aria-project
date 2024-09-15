import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle, faPlus, faMinus,
} from '@fortawesome/free-solid-svg-icons';
import ig from '../assets/ig.svg';
import linkedn from '../assets/linkedn.svg';
import tweet from '../assets/tweet.svg';
import './reachus.css';

const Reachus = () => {
  const [questionOpen, setQuestionOpen] = useState({
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
      <div className="trio">
        <div className="intro">
          <div className="gradient-overlay2" />
          <div className="content2">
            <h1>Let&apos;s work together !</h1>
            <p>
              Our dedicated team is ready to assist you with any inquiries,
              questions, or requests you may habe. Whether you are seeking
              information about our services, want to discuss a potential
              project, or simply have a general query, we are here to help.
            </p>
            <div className="check">
              <div className="each-check">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#ffffff' }} className="checkIcon" />
                Contact us
              </div>
              <div className="each-check">
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#ffffff' }} className="checkIcon" />
                Great service
              </div>
            </div>
          </div>
        </div>

        <div className="the-form">
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
            <div className="form-group">
              <h4>Phone number</h4>
              <input type="tel" />
            </div>
            <div className="form-group">
              <h4>Service</h4>
              <input type="text" />
            </div>
            <div className="form-group">
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
            <div className="the-socials">
              <div className="each-socials">
                <img src={ig} alt="instagram" />
                @ariaprojectsltd
              </div>
              <div className="each-socials">
                <img src={tweet} alt="twitter" />
                @ariaprojectsltd
              </div>
              <div className="each-socials">
                <img src={linkedn} alt="linkedn" />
                @ariaprojectsltd
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="questions2">
        <h2>Frequently asked questions</h2>
        <div className="each-question2">
          <div className="main-question2">
            <h4>
              How long does a typical consulting engagement last?
            </h4>
            <FontAwesomeIcon
              icon={questionOpen.question1 ? faMinus : faPlus}
              onClick={() => toggleQuestion('question1')}
            />
          </div>
          {questionOpen.question1
          && (
          <p>
            The duration of a consulting engagement varies depending on the scope and
            complexity of the project. It can range from a few weeks for a specific task
            or analysis to several months for comprehensive organizational transformations.
          </p>
          )}
        </div>
        <div className="each-question2">
          <div className="main-question2">
            <h4>
              How can project management service help my company
              achieve its goals?
            </h4>
            <FontAwesomeIcon
              icon={questionOpen.question2 ? faMinus : faPlus}
              onClick={() => toggleQuestion('question2')}
            />
          </div>
          {questionOpen.question2
          && (
          <p>
            Our project management services help organizations achieve their goals by
            providing a structured approach to planning, executing, and completing
            projects. This ensures efficient resource allocation, timely delivery,
            and successful implementation of initiatives, ultimately contributing
            to overall business success.
          </p>
          )}
        </div>
        <div className="each-question2">
          <div className="main-question2">
            <h4>
              Can your company handle projcts/events of different
              scales and budgets?
            </h4>
            <FontAwesomeIcon
              icon={questionOpen.question3 ? faMinus : faPlus}
              onClick={() => toggleQuestion('question3')}
            />
          </div>
          {questionOpen.question3
          && (
          <p>
            Yes, our company is equipped to handle projects and events of various
            scales and budgets. We tailor our services to meet the specific needs
            of each client, whether it&apos;s a small-scale project or a large-scale event.
            Our goal is to deliver successful outcomes within the defined budget and scope.
          </p>
          )}
        </div>
        <div className="each-question2">
          <div className="main-question2">
            <h4>
              How do you ensure confidentiality and data security during
              consulting engagements?
            </h4>
            <FontAwesomeIcon
              icon={questionOpen.question4 ? faMinus : faPlus}
              onClick={() => toggleQuestion('question4')}
            />
          </div>
          {questionOpen.question4
          && (
          <p>
            We take data security and confidentiality seriously. Our company follows
            industry best practices and implements robust security measures to protect
            client information. This includes restricted access, encryption, and adherence
            to privacy standards. We prioritize the confidentiality and security of our
            clients&apos; data throughout the consulting engagement.
          </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reachus;
