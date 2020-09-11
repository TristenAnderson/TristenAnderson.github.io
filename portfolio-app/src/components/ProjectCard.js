import React from 'react'
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import '../css/ProjectCard.css';

function ProjectCard(props) {

    const useStyle = {
        color: "#5ff0ce",
    }

    const points = props.project.tools.map(tool => <p className="project-tools">{tool}</p>)

    // function Test(e) {
    //     e.target.style.background = "orange"
    // }

    // function Undo(e) {
    //     e.target.style.background = "black"
    // }

    return(
        <div >
            <div className='project-card'>
                <div className="project-card-icon">
                    <FolderOpenIcon style={useStyle}/>
                </div>
                <div className="project-card-header">
                    <div className="project-card-header-item">
                    <a 
                    href={props.project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <GitHubIcon style={useStyle}/>
                    </a>
                    </div>
                    <LaunchIcon style={useStyle}/>
                </div>
                <h1 className="project-title">{props.project.title}</h1>
                <p className="project-desc">{props.project.desc}</p>
                {points}
            </div>
        </div>
    )
}

// onMouseEnter={Test} onMouseLeave={Undo}

export default ProjectCard