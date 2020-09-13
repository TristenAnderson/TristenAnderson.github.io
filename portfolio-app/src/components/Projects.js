import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import ProjectCard from './ProjectCard'
import Data from '../data/projects'
import '../css/Projects.css'

function Projects() {

    const ProjectCards = Data.map(item => <ProjectCard project={item}/>)

    return(
        <div>
            <div className='NavCenter'> 
                <Navbar /> 
            </div>

            <div className='mainContent'>
                <div className="grid-container">
                    <div className="project-grid">
                        {ProjectCards}     
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Projects