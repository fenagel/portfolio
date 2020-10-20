import React from "react";
import './About.css';
import profile from './images/profile.jpg';
import ideas from './images/ideas.jpg';
import sketch from './images/sketch.jpg';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props) {
  return (
    <div className="About">
      <h1 className="Header mb-5">ABOUT</h1>
      <p className="Header-p mb-5">Recently, I made the transition from a previous life in <strong>online marketing</strong> to becoming a <strong>full-stack web developer</strong>.</p>
      <p className="Header-p">With my background online marketing & ecommerce <strong>I know what today's websites need</strong> to be marketable.</p>
      <Row className="align-items-start Animation">
        <Col xs={6} md={3} className="About-Card">
          <i className="fas fa-fighter-jet"></i>
          <h4 className="About-Label">Fast</h4>
          <p>Fast load times are at the top of the list</p>
        </Col>
        <Col xs={6} md={3} className="About-Card">
          <i className="fas fa-mobile-alt"></i>
          <h4 className="About-Label">Responsive</h4>
          <p>Layouts need to work on all screen sizes</p>
        </Col>
        <Col xs={6} md={3} className="About-Card">
          <i className="far fa-lightbulb"></i>
          <h4 className="About-Label">Intuitive</h4>
          <p>Websites should be easy to use with an intuitive UI/UX</p>
        </Col>
        <Col xs={6} md={3} className="About-Card">
          <i className="fas fa-ad"></i>
          <h4 className="About-Label">Persuasive</h4>
          <p>Create a brand experience that persuades, converts and inspires.</p>
        </Col>
      </Row>
      <Row className="About-Skills-Wrapper">
        <Col xs={12} md={7} className="Who-This">
          <Image src={profile} href="" lt="Profile" rounded className="mb-5 Profile-Pic" />
          <h4 className="mb-3">Who's this guy?</h4>
          <p>After graduating from the coding bootcamp of Le Wagon I'm now teaching current students as a Teaching Assistant. <br></br> <br></br>I have a serious passion for thaiboxing, other martial arts and Augmented Reality!</p>
        </Col>
        <Col xs={12} md={5} className="About-Skills">
          <Row className="Skill-Item justify-content-between">
            <p>CSS</p>
            <i className="fab fa-css3"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>HTML</p>
            <i className="fab fa-html5"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>React</p>
            <i className="fab fa-react"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>JavaScript</p>
            <i className="fab fa-js"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>Ruby on Rails</p>
            <i className="fas fa-gem"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>UI Design (Figma)</p>
            <i className="fab fa-figma"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>Google Ads / Analytics</p>
            <i className="fas fa-ad"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>SQL, PostgreSQL</p>
            <i className="fas fa-database"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>Deployment (Heroku)</p>
            <i className="fas fa-server"></i>
          </Row>

        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="About-Description-Picture">
          <Image src={ideas} href="" lt="ideas into reality" thumbnail className="" />
        </Col>
        <Col xs={12} md={6} className="About-Description">
          <h4>Web Development</h4>
          <p>What fascinates me about coding is that it gives you the ability to turn ideas into reality.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="About-Description Desktop">
          <h4>Online Marketing</h4>
          <p>My specialty is Google Ads. I also have expertise in Conversion Rate Optimization</p>
        </Col>
        <Col xs={12} md={6} className="About-Description-Picture Desktop">
          <Image src={sketch} href="" lt="sketch" thumbnail className="" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} className="About-Description-Picture Mobile">
          <Image src={sketch} href="" lt="sketch" thumbnail className="" />
        </Col>
        <Col xs={12} md={6} className="About-Description Mobile">
          <h4>Online Marketing</h4>
          <p>My specialty is Google Ads. I also have expertise in Conversion Rate Optimization</p>
        </Col>
      </Row>
    </div>

  )
}

export default About;
