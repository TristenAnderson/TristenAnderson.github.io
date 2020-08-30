import React from 'react'
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import '../css/ProjectCard.css';

function ProjectCard(props) {

    const useStyle = {
        color: "#5ff0ce",
    }

    // function Test(e) {
    //     e.target.style.background = "orange"
    // }

    // function Undo(e) {
    //     e.target.style.background = "black"
    // }

    return(
        <div >
        <div className='project-card' id='fucker' >
            <FolderOpenIcon style={useStyle}/>
            <a 
            href={props.project.link}
            target="_blank"
            rel="noopener noreferrer"
             >
            <GitHubIcon style={useStyle}/>
            </a>
            <LaunchIcon style={useStyle}/>
            <h1>{props.project.title}</h1>
            <p>{props.project.desc}</p>
            <p>{props.project.tools}</p>
        </div>
        </div>
    )
}

// onMouseEnter={Test} onMouseLeave={Undo}

export default ProjectCard