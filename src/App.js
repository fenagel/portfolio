import React from 'react';
import './App.css';
import logo from './logo.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo" />
          <div className="navigation-sub">
            <Link to="/" className="item">Home</Link>
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/articles" className="item">Resume</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>

        <Route exact path="/" component={Home} />
        <Route path="/projects" component= {Projects} />
        <Route path="/articles" component={Resume} />
        <Route path="/about" component={About} />

      </div>
    </BrowserRouter>
  );
}

export default App;
