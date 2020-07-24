import React from "react";
import Thumbnail from './Thumbnail';
import './Projects.css';
import wyder from './images/wyder.png';


function Projects(props) {
  return (
    <div className="Projects">
      <h1 className="Header">PROJECTS</h1>
      <Thumbnail
       link="http://www.wyder.xyz/"
       image={wyder}
       title="University Video Platform"
       category="Website"      />
    </div>
  )
}

export default Projects;
