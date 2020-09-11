import React from 'react';
import {Button} from 'react-bootstrap'; 

function OutlineButton(props) {

    return (
      <div>
        <Button
          variant="outline-success"
          href={props.to}
          target="_blank"
          rel="nofollow noopener noreferrer">
          {props.title}
        </Button>
      </div>
    )
}

export default OutlineButton;