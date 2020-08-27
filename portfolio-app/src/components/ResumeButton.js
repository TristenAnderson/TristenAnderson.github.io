import React from 'react';
import Pdf from './Resume.pdf';
import {Button} from 'react-bootstrap'; 


function ResumeButton() {

    return (
      <div>
        <Button
          variant="outline-success"
          href={Pdf}
          target="_blank"
          rel="nofollow noopener noreferrer">
          Resume
        </Button>
      </div>
    )
}

export default ResumeButton;