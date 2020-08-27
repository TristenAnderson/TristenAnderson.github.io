import React, { Component } from 'react';
import Pdf from './Resume.pdf';
import {Button} from 'react-bootstrap'; 


class ResumeButton extends Component {

  render() {

    return (
      <div className = "App">
        <Button variant="outline-success" href={Pdf} >Resume</Button>
      </div>
    );
  }
}

export default ResumeButton;