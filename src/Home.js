import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import './Home.css';

function Home(props) {

useEffect(() => {
  window.scrollTo(0, 0)
})

  return (
    <div className="Home">
      {/* <Image src={hero} href="" id="home-anchor" lt="hero image" className="Hero-Image" /> */}
      <header className="Hero-Header">
      <div className="Hero-H1">
        <h1>HELLO! I'M FELIX</h1>
      </div>
      <div className="Hero-P">
        <p>I'm a web developer & performance marketer</p>
      </div>
      <div className="Hero-Scroll">
        <span></span>
        <span></span>
        <span></span>
      </div>
      </header>
      <Container fixed="top" fluid="md" >
      <About />
      <Projects />
      <Resume />
      </Container>
    </div>
    )
}
export default Home;
