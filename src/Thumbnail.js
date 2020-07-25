import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Projects.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false }
    this.handleEnter = this.handleEnter.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }


  handleEnter(){
    this.setState({
      isHovered: true
    });
  }

  handleLeave(){
    this.setState({
      isHovered: false
    });
  }

  render() {
    return (
        <Col className="Project" onMouseLeave={this.handleLeave} onMouseEnter={this.handleEnter}>
          <Row className= "Dot-Wrapper">
            <div id="Dot-1" className="Browser-Dot"></div>
            <div id="Dot-2" className="Browser-Dot"></div>
            <div id="Dot-3" className="Browser-Dot"></div>
          </Row>
          {this.state.isHovered ? (
            <Row className="justify-content-center mt-3">
              <Col>
                <p>{this.props.title}</p>
                <p>Category: {this.props.category}</p>
                <p>Built with: {this.props.language}</p>
                <Button className="Button-Color" target="blank" href={this.props.link} variant="outline-primary">More Details</Button>
              </Col>
            </Row>
          ) : (
            <div className="Project-Image mt-3">
              <img src={this.props.image} alt="Project"/>
            </div>
          )}
        </Col>
    );
  }
}

export default Thumbnail;

