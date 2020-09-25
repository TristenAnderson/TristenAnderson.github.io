import React from 'react'
import Navbar from './Nav'
import JobCard from './JobCard'
import Footer from './Footer'
import EducationCard from './EducationCard'
import data from '../data/jobs'
import Education from '../data/education'
import '../css/Work.css'


function Work() {

    const WorkCards = data.map(item => <JobCard job={item} />)
    const EducationCards = Education.map(item => <EducationCard ed={item} />)

    return(
        <div> 
            
            <div className='nav-center'> 
                <Navbar /> 
            </div>

            <div className="header-wrapper">
                    <h1 className="title">Resume Overview</h1>
            </div>

            <div className='main-content'>
                <div className='work-container'>

                    <div>
                        <h2>Education</h2>
                        {EducationCards}
                    </div>

                    <div>
                        <h2>Professional Experience</h2>
                        {WorkCards}
                    </div>
                    

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Work