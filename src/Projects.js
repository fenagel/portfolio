import React from "react";
import Thumbnail from './Thumbnail';


function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
       link="/airbnb"
       image="http://airbnb-image-url.jpg"
       title="Airbnb Experiences"
       category="Website"      />
    </div>
  )
}

export default Projects;
