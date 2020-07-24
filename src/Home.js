import React from "react";
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import './Home.css';

function Home(props) {
  return (
    <div className="Home">
      <h1 className="Header">HOME</h1>
      <About />
      <Projects />
      <Resume />
    </div>
  )
}

export default Home;
