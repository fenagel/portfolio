import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import './Home.css';

import hero from './images/hero.png';

function Home(props) {

useEffect(() => {
  window.scrollTo(0, 0)
})

  return (
    <div className="Home">
      <Image src={hero} href="" id="home-anchor" lt="hero image" className="Hero-Image" />
      <Container fixed="top" fluid={false} >
      <About />
      <Projects />
      <Resume />
      </Container>
    </div>
    )
}
export default Home;