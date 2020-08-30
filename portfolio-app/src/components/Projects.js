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
            <Navbar /> 
            <div className='mainContent'>
                {/* <h1 style={{left: "30vh", position: "relative", top: "2vh"}}>Some Sample Text</h1> */}
                
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