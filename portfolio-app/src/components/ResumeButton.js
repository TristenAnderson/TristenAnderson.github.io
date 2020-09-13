import React from 'react';
import {Button} from 'react-bootstrap'; 
import Resume from '../data/TAndersonResume.pdf'


function ResumeButton() {

    return (
      <div>
        <Button
          variant="outline-success"
          href={Resume}
          target="_blank"
          rel="nofollow noopener noreferrer"
          >
          Resume
        </Button>
      </div>
    )
}

export default ResumeButton;