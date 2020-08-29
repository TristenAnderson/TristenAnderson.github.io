import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import ProjectCard from './ProjectCard'
import '../css/Projects.css'

function Projects() {

    return(
        <div>
            <Navbar /> 
            <div className='mainContent'>
                <div className="projectCont">
                <div className="projectGrid">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects