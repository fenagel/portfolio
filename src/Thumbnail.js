import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
    let projectClass = this.state.isHovered && "Project-Hovered";
    return (
        <Col xs={12} md={6} className="Project" onMouseLeave={this.handleLeave} onMouseEnter={this.handleEnter}>
          <Row className= "Dot-Wrapper">
            <div id="Dot-1" class="Browser-Dot"></div>
            <div id="Dot-2" class="Browser-Dot"></div>
            <div id="Dot-3" class="Browser-Dot"></div>
          </Row>
          {this.state.isHovered ? (
            <Col className="justify-content-center mt-5">
              <p>{this.props.title}</p>
              <p>Category: {this.props.category}</p>
              <Button className="color" target="blank" href={this.props.link} variant="outline-primary">More Details</Button>
            </Col>
          ) : (
            <div className="Project-Image">
              <img src={this.props.image} alt="Project"/>
            </div>
          )}
        </Col>
    );
  }
}

export default Thumbnail;

