import React from 'react'
import Navbar from './Nav'
import JobCard from './JobCard'
import Footer from './Footer'
import data from '../data/jobs'

function Work() {

    const Cards = data.map(item => <JobCard job={item} />)

    return(
        <div> 
            <Navbar /> 
            <div className='mainContent'>
                <div className="jobContainer">
                    {Cards}
                </div>
            </div>
        <Footer />
        </div>
    )
}

export default Work