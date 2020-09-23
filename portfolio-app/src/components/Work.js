import React from 'react'
import Navbar from './Nav'
import JobCard from './JobCard'
import Footer from './Footer'
import ResumeButton from './ResumeButton'
import data from '../data/jobs'
import '../css/Work.css'

function Work() {

    const Cards = data.map(item => <JobCard job={item} />)

    return(
        <div> 
            
            <div className='NavCenter'> 
                <Navbar /> 
            </div>

            <div className='mainContent'>
                
                <div className='work-container'>
                    <div className="work-header">
                        <h1 className="title">Resume Overview</h1>
                        <div className="work-header-item"><ResumeButton /></div>
                    </div>
                
                    {Cards}
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Work