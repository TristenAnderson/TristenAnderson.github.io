import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import '../css/Home.css'

function Home() {

    return(
        <div>
            <div className='NavCenter'> 
                <Navbar /> 
            </div>

            <div className='mainContent'>
                <div className='home'>
                    <h1 className='title'>Hi, my name is Tristen Anderson</h1>
                    <h1 className='title'>Welcome to my site</h1>
                    <p className='styledText'>Use the navbar to learn more about my work experience and personal projects</p>
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

export default Home