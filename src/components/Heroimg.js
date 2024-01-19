import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft, faArrowRight, faPlus, faEnvelope, faPhone, faMinus,
} from '@fortawesome/free-solid-svg-icons';
import secondPage from '../assets/secondPage.svg';
import thirdPage from '../assets/thirdPage.svg';
import fourthPage from '../assets/fourthPage.svg';
import logoOne from '../assets/logoOne.svg';
import logoTwo from '../assets/logoTwo.svg';
import logoThree from '../assets/logoThree.svg';
import atlanticLogo from '../assets/atlanticLogo.svg';
import beedazzleLogo from '../assets/beedazzleLogo.svg';
import bricksLogo from '../assets/bricksLogo.svg';
import ariaLogo from '../assets/ariaLogo.svg';
import ig from '../assets/ig.svg';
import linkedn from '../assets/linkedn.svg';
import tweet from '../assets/tweet.svg';
import forWhat from '../assets/forWhat.svg';
import './heroimg.css';

const testimoniesData = [
  {
    person: 'Humphrey O.',
    title: 'Managing Director, Atlantic Marine oilfield & oilfield services Ltd',
    quote: '"Thank you for handling this upgrade exceptionally. Your professionalism, and efficiency really exceeded our expectations. Looking forward to future collaborations."',
    logo: logoOne,
  },
  {
    person: 'Ugonna C.',
    title: 'CEO, Beedarzle Nigeria',
    quote: '"I want to say a huge thank you for rocking our launch! You guys seriously nailed it with the venue selection and top-notch execution. Our team and guests were blown away by the incredible experience. Thanks for not letting me down. You guys are absolute rockstars!"',
    logo: logoTwo,
  },
  {
    person: 'Kingsley U.',
    title: 'Creative Director, Brick and brains property ltd',
    quote: '"I want to personally thank you for the outstanding job you did with our human resource department. Your recommendations and strategies have signficantly improved our organizational structure and efficiency. I am truly impressed. Do keep up the good work."',
    logo: logoThree,
  },
];

const Heroimg = () => {
  const [currentTestimonyIndex, setCurrentTestimonyIndex] = useState(0);

  const handleNextTestimony = () => {
    setCurrentTestimonyIndex((prevIndex) => (prevIndex + 1) % testimoniesData.length);
  };

  const handlePrevTestimony = () => {
    setCurrentTestimonyIndex((prevIndex) => (prevIndex - 1 + testimoniesData.length)
    % testimoniesData.length);
  };

  const currentTestimony = testimoniesData[currentTestimonyIndex];

  const isFirstTestimony = currentTestimonyIndex === 0;
  const isLastTestimony = currentTestimonyIndex === testimoniesData.length - 1;

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
    <div className="homepage">
      <div className="firstPage">
        <h1>Empowering businesses with innovative solutions</h1>
        <p>
          We offer innovative approach and strategies that help businesses thrive and succeed.
          By leveraging our expertise, knowledge, and cutting-edge solutions,
          Arla assists businesses in achieveing their goals.
        </p>
        <button type="button">
          Get in touch
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className="secondPage">
        <div className="secondPageTopic">
          <h2>What we do</h2>
          <p>
            At Aria, our area of expertise lies in providing comprehensive
            solutions to meet your specific needs and deliver exceptional
            results. With a history of delivering results, we proudly serve
            as your reliable partner in unlocking your business&apos;s complete
            potential.
          </p>
        </div>

        <div className="secondPageCard">
          <img src={secondPage} alt="lady with laptop" />
          <h3>PROJECT MANAGEMENT</h3>
          <h2>
            Execute your projects seamlessly with Aria
          </h2>
          <p>
            Our project management expertise ensures that all your initiatives
            are executed efficiently and effectively. We take charge of
            orchestrating resources and tasks, setting clear objectives, defining
            timelines, and monitoring progress. By applying proven project
            management methodologies, we ensure that your projects ar delivered on time
            and within budget, while meeting your desired outcomes.
          </p>
        </div>
      </div>

      <div className="thirdPage">
        <img src={thirdPage} alt="wine glasses cheers" />
        <h3>EVENT PLANNING</h3>
        <h2>
          Elevate your events with impeccable precisions.
        </h2>
        <p>
          When it comes to corporate gatherings, we take pride in out exceptional
          event planning services. Our team will meticulously plan and execute every
          aspect of your event, whether it be a corporate conference, gala dinner, or
          product launch. From venue selection and logistics to program design and vendor
          coordination, we take care of every detail to create an unforgettable experience for
          your guests.
        </p>
      </div>

      <div className="fourthPage">
        <img src={fourthPage} alt="group of people with a laptop" />
        <h3>BUSINESS CONSULTING</h3>
        <h2>Optimize your business potential with expert consulting services.</h2>
        <p>
          Our consultants are skilled in problem-solving and can identify opportunities
          for improvement, whether it&apos;s streamlining processes, optimizing operations,
          or enhancing organizational performance. We analyze data, construct thorough
          assessments and offer strategic recommendations to help you make informed decisions.
          We work closely with you to understand your unique challenges and develop tailored
          solutions to drive growth and success.
        </p>
      </div>

      <div className="testimonies">
        <img src={forWhat} alt="backgroundimg" className="whatbg" />
        <h1>What our clients say</h1>
        <p>
          Discover the undeniable affirmation of our esteemed clients who attest to the
          exceptional experience of working with Aria on their projects.
        </p>
        <div className="testimony">
          <div className="each testimony">
            <div className="person">
              <img src={currentTestimony.logo} alt="company logo" />
              <h3>{currentTestimony.person}</h3>
              <p>{currentTestimony.title}</p>
            </div>
            <p>{currentTestimony.quote}</p>
          </div>
        </div>

        <div className="prevNext">
          <button
            type="button"
            className="previous"
            onClick={handlePrevTestimony}
            disabled={isFirstTestimony}
            aria-label="Previous Testimony"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            type="button"
            className="next"
            onClick={handleNextTestimony}
            disabled={isLastTestimony}
            aria-label="Next Testimony"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
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

        <div className="brands">
          <h2>Brands that trust us</h2>
          <p>Join clients who have trusted Aria for their project needs.</p>
          <div className="brandLogos">
            <img src={atlanticLogo} alt="atlantic logo" />
            <img src={beedazzleLogo} alt="beedazzle logo" />
            <img src={bricksLogo} alt="bricks logo" />
          </div>
        </div>
      </div>

      <div className="questions">
        <h2>Frequently asked questions</h2>
        <div className="each-question">
          <h4>
            How long does a typical consulting engagement last?
          </h4>
          <FontAwesomeIcon
            icon={questionOpen.question1 ? faMinus : faPlus}
            onClick={() => toggleQuestion('question1')}
          />
          {questionOpen.question1
          && (
          <p>
            The duration of a consulting engagement varies depending on the scope and
            complexity of the project. It can range from a few weeks for a specific task
            or analysis to several months for comprehensive organizational transformations.
          </p>
          )}
        </div>
        <div className="each-question">
          <h4>
            How can project management service help my company
            achieve its goals?
          </h4>
          <FontAwesomeIcon
            icon={questionOpen.question2 ? faMinus : faPlus}
            onClick={() => toggleQuestion('question2')}
          />
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
        <div className="each-question">
          <h4>
            Can your company handle projcts/events of different
            scales and budgets?
          </h4>
          <FontAwesomeIcon
            icon={questionOpen.question3 ? faMinus : faPlus}
            onClick={() => toggleQuestion('question3')}
          />
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
        <div className="each-question">
          <h4>
            How do you ensure confidentiality and data security during
            consulting engagements?
          </h4>
          <FontAwesomeIcon
            icon={questionOpen.question4 ? faMinus : faPlus}
            onClick={() => toggleQuestion('question4')}
          />
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
};

export default Heroimg;
