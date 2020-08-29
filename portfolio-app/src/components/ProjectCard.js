import React from 'react'
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import '../css/ProjectCard.css';

function ProjectCard(props) {

    const useStyle = {
        color: "#5ff0ce",
    }

    return(
        <div className="App">
        <div className="testing" >
            <FolderOpenIcon style={useStyle}/>
            <a 
            href="https://github.com/TristenAnderson"
            target="_blank"
            rel="noopener noreferrer"
             >
            <GitHubIcon style={useStyle}/>
            </a>
            <LaunchIcon style={useStyle}/>
            <h1>Project Title</h1>
            <p>Project Description</p>
            <p>Tools Used</p>
        </div>
        </div>
    )
}

export default ProjectCard