import React from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';

import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

function App() {
  return (
      <div className="App">
        <NavBar className="border-bottom App-Navbar" expand="lg" sticky="top" >
              <NavBar.Brand><i className="fas fa-terminal"></i></NavBar.Brand>
              <NavBar.Toggle aria-controls="Navbar Toggle" className="border-0"/>
              <NavBar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link to="/portfolio/" className="nav-link">Home</Link>
                  <Link to="/portfolio/about" className="nav-link">About</Link>
                  <Link to="/portfolio/projects" className="nav-link">Projects</Link>
                  <Link to="/portfolio/resume" className="nav-link">Resume</Link>
                </Nav>
              </NavBar.Collapse>
            </NavBar>
          <Route exact path="/portfolio/" component={Home} />
          <Route path="/portfolio/about" component={About} />
          <Route path="/portfolio/projects" component= {Projects} />
          <Route path="/portfolio/resume" component={Resume} />
      </div>
  );
}

export default App;
