import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

function GithubIcon(props) {

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
            <GitHubIcon style={useStyle}/>
            </a>
        </div>
    )
}

export default GithubIcon