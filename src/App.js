import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import NavBar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar className="border-bottom App-Navbar" expand="lg" sticky="top" >
              <NavBar.Brand><i className="fas fa-terminal"></i></NavBar.Brand>
              <NavBar.Toggle aria-controls="Navbar Toggle" className="border-0"/>
              <NavBar.Collapse id="navbar-toggle">
                <Nav className="ml-auto" >
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/about" className="nav-link">About</Link>
                  <Link to="/projects" className="nav-link">Projects</Link>
                  <Link to="/resume" className="nav-link">Resume</Link>
                </Nav>
              </NavBar.Collapse>
            </NavBar>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component= {Projects} />
          <Route path="/resume" component={Resume} />
      </div>
    </BrowserRouter>
  );
}

export default App;
