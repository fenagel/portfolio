import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Resume.css';

function Resume(props) {
  return (
    <Container className="Resume mt-5">
      <h1 className="Header pt-2">RESUME</h1>
      <div class="timeline">
        <div class="container-timeline left">
          <div class="content">
            <h2>2020</h2>
            <p><strong>Le Wagon</strong> - 9 week web development course. Now working as a <strong>Teaching Assistant</strong> for the next batch at Le Wagon.</p>
          </div>
        </div>
        <div class="container-timeline right">
          <div class="content">
            <h2>2017-2020</h2>
            <p><strong>Smarketer</strong> - Worked as <strong>Online Marketing Consultant</strong> and <strong>Team Lead</strong> for Smarketer. Specialized in Google Ads!</p>
          </div>
        </div>
        <div class="container-timeline left">
          <div class="content">
            <h2>2015-2017</h2>
            <p><strong>University College Dublin</strong> - <strong>MSc. in International Business</strong> - designed to provide students with the skills & competencies required to operate in the global market place.</p>
          </div>
        </div>
        <div class="container-timeline right">
          <div class="content">
            <h2>Additional Details</h2>
            <p>Check out my LinkedIn, download my CV or visit my GitHub profile to find out more about me.</p>
            <Row className="justify-content-between">
            <a target="blank" href="https://www.linkedin.com/in/fenagel/"><i className="fab fa-linkedin"></i></a>
            <a target="blank" href="https://drive.google.com/file/d/1RMvbQYZHiathZ8qYXgSiZQ4GzJzhYyvR/view?usp=sharing"><i class="fas fa-download"></i></a>
            <a target="blank" href="https://github.com/fenagel"><i className="fab fa-github-square"></i></a>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Resume;
