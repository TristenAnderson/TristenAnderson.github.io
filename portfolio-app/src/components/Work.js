import React from 'react'
import Navbar from './Nav'
import JobCard from './JobCard'
import Footer from './Footer'
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
                <div className='Work'>
                    {Cards}
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Work