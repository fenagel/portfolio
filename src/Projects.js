import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Thumbnail from './Thumbnail';
import './Projects.css';
import wyder from './images/wyder.png';
import cocktail from './images/cocktail.png';
import chat from './images/chat.png'


function Projects(props) {
  return (
    <div className="Projects">
      <h1 className="Header">PROJECTS</h1>
      <Row>
        <Col xs={12} md={6} xl={4} className="mb-3">
          <Thumbnail
           link="http://www.wyder.xyz/"
           image={wyder}
           title="University Video Platform"
           category="Website"
           language="Ruby on Rails"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-3">
           <Thumbnail
           link="https://damp-refuge-59220.herokuapp.com/"
           image={cocktail}
           title="Cocktail Recipe App"
           category="Website"
           language="Ruby on Rails"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-3">
           <Thumbnail
           link="https://fenagel.github.io/chat-redux/"
           image={chat}
           title="React Chat"
           category="Chat Implementation"
           language="React, Redux"      />
        </Col>
      </Row>

    </div>
  )
}

export default Projects;
