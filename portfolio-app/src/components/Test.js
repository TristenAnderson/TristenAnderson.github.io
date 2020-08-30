import React from 'react'
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import '../css/ProjectCard.css';

function ProjectCard(props) {

    // const useStyle = {
    //     color: "#5ff0ce",
    // }

    // const projectBox = {
    //     position: "relative",
    //     height: "26vh",
    //     width: "32vh",
    //     backgroundColor: "red",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     // display: "flex",
    //     borderRadius: ".2rem",
    // }

    return(
        <div >
        <div className="fuck">
            <FolderOpenIcon />
            <a 
            href="https://github.com/TristenAnderson"
            target="_blank"
            rel="noopener noreferrer"
             >
            <GitHubIcon/>
            </a>
            <LaunchIcon/>
            <h1>Project Title</h1>
            <p>Project Description</p>
            <p>Tools Used</p>
        </div>
        </div>
    )
}

export default ProjectCard