import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Thumbnail from './Thumbnail';
import './Projects.css';

import tinyhouses from './images/tinyhouses.png';
import wyder from './images/wyder.png';
import cocktail from './images/cocktail.png';
import yahtzee from './images/yahtzee.png';
import nature from './images/nature.png';
import lights from './images/lights.png';
import todo from './images/todo.png';
import trillo from './images/trillo.png';
import nexter from './images/nexter.png';


function Projects(props) {
  return (
    <div className="Projects">
      <h1 className="Header Skew-Normal">Some of my Projects</h1>
      <Row>
      <Col xs={12} md={6} xl={4} className="mb-5">
           <Thumbnail
           link="https://tinyhouses.herokuapp.com/"
           image={tinyhouses}
           title="Tinyhouses Airbnb"
           category="Website"
           language="Ruby on Rails"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-5">
          <Thumbnail
           link="http://www.wyder.xyz/"
           image={wyder}
           title="University Video Platform"
           category="Website"
           language="Ruby on Rails"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-5">
           <Thumbnail
           link="https://damp-refuge-59220.herokuapp.com/"
           image={cocktail}
           title="Cocktail Recipe App"
           category="Website"
           language="Ruby on Rails"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-5">
           <Thumbnail
           link="https://fenagel.github.io/nexter/"
           image={nexter}
           title="CSS Grid Concepts"
           category="CSS"
           language="HTML & CSS"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-5">
           <Thumbnail
           link="https://fenagel.github.io/trillo/"
           image={trillo}
           title="Flexbox Concepts"
           category="CSS"
           language="HTML & CSS"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-5">
           <Thumbnail
           link="https://fenagel.github.io/react-todo-list/"
           image={todo}
           title="React Todo-List"
           category="React App"
           language="React"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-5">
           <Thumbnail
           link="https://fenagel.github.io/react-lights-out/"
           image={lights}
           title="React Lights-Out-Game"
           category="React App"
           language="React"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-5">
           <Thumbnail
           link="https://fenagel.github.io/nature-tours/"
           image={nature}
           title="Advanced CSS Concepts"
           category="CSS"
           language="HTML & CSS"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-5">
           <Thumbnail
           link="https://fenagel.github.io/yahztee/"
           image={yahtzee}
           title="React Yahtzee Game"
           category="React Game App"
           language="React"      />
        </Col>
        
      </Row>

    </div>
  )
}

export default Projects;
