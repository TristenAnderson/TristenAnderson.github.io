import React from 'react';
import LaunchIconUI from '@material-ui/icons/Launch';

function LaunchIcon(props) {

    const useStyle = {
        color: "#5ff0ce",
    }

    return(
        <div>
            <a 
            href={props.to}
            target="_blank"
            rel="noopener noreferrer"
            >
            <LaunchIconUI style={useStyle}/>
            </a>
        </div>
    )
}

export default LaunchIcon