import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Thumbnail from './Thumbnail';
import './Projects.css';

import wyder from './images/wyder.png';
import cocktail from './images/cocktail.png';
import yahtzee from './images/yahtzee.png';
import gif from './images/gif.png';
import lights from './images/lights.png';
import todo from './images/todo.png';


function Projects(props) {
  return (
    <div className="Projects">
      <h1 className="Header mb-5">PROJECTS</h1>
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
           link="https://fenagel.github.io/yahztee/"
           image={yahtzee}
           title="React Yahtzee Game"
           category="React Game App"
           language="React"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-3">
           <Thumbnail
           link="https://fenagel.github.io/react-gifs/"
           image={gif}
           title="React Gif Generator"
           category="React API calls"
           language="React"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-3">
           <Thumbnail
           link="https://fenagel.github.io/react-lights-out/"
           image={lights}
           title="React Lights-Out-Game"
           category="React Game"
           language="React"      />
        </Col>
        <Col xs={12} md={6} xl={4} className="mb-3">
           <Thumbnail
           link="https://fenagel.github.io/react-todo-list/"
           image={todo}
           title="React Todo-List"
           category="React App"
           language="React"      />
        </Col>
      </Row>

    </div>
  )
}

export default Projects;