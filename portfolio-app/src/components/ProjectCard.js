import React from 'react'
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import '../css/ProjectCard.css';

function ProjectCard(props) {

    const useStyle = {
        color: "#5ff0ce",
    }

    // const projectBox = {
    //     position: "relative",
    //     height: "25vh",
    //     width: "16vw",
    //     backgroundColor: "black",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     borderRadius: ".4rem",
    //     padding: "1rem 1rem",
    // }

    function Test(e) {
        e.target.style.background = "orange"
    }

    function Undo(e) {
        e.target.style.background = "black"
    }

    return(
        <div >
        <div className="projectBox" onMouseEnter={Test} onMouseLeave={Undo}>
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

export default ProjectCard