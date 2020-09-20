import React from 'react'
import LaunchIcon from './LaunchIcon'
import GithubIcon from './GithubIcon'
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import '../css/ProjectCard.css';

function ProjectCard(props) {

    const useStyle = {
        color: "#5ff0ce",
    }

    const points = props.project.tools.map(tool => <p className="project-tools">{tool}</p>)

    return(
        <div >
            <div className='project-card'>

                <div className="project-card-icon">
                    <FolderOpenIcon style={useStyle}/>
                </div>

                <div className="project-card-header">
                    
                    {props.project.link ? 
                    <div className="project-card-header-item">
                        <GithubIcon to={props.project.link} /> 
                    </div> : ""}
                    
                    { props.project.launch ?
                    <div className="project-card-header-item"> 
                        <LaunchIcon to={props.project.launch}/>
                    </div> : ""}
                    
                </div>

                <h1 className="project-title">{props.project.title}</h1>
                <p className="project-desc">{props.project.desc}</p> 
                {points}

            </div>
        </div>
    )
}

export default ProjectCard