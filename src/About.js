import React from "react";
import './About.css';
import profile from './images/profile.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About(props) {
  return (
    <Container className="About">
      <h1 className="Header mb-5">ABOUT</h1>
      <p className="Header-p">Recently, I made the transition from a previous life in <strong>online marketing</strong> to becoming a <strong>full-stack web developer</strong>.</p>
      <p className="Header-p">With my background online marketing & ecommerce <strong>I know what today's websites need</strong> to be marketable.</p>
      <Row className="align-items-start mt-5 mb-5 Animation">
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
        <Col xs={12} md={6} className="Who-This">
          <Image src={profile} href="" lt="Profile" rounded className="mb-2 Profile-Pic" />
          <h4>Who's this guy?</h4>
          <p>I'm a newly bread web developer living in Berlin. I have a serious passion for thaiboxing and other martial arts. Augmented Reality is another topic I love to talk about!</p>
        </Col>
        <Col xs={12} md={6} className="About-Skills">
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
            <p>Google Ads / Google Analytics</p>
            <i className="fas fa-ad"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>SQL, PostgreSQL, ActiveRecord</p>
            <i className="fas fa-database"></i>
          </Row>
          <Row className="Skill-Item justify-content-between">
            <p>Deployment (i.e. Heroku)</p>
            <i className="fas fa-server"></i>
          </Row>

        </Col>
      </Row>
    </Container>

  )
}

export default About;
