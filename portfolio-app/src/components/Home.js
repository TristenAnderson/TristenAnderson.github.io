import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import '../css/Home.css'

function Home() {

    return(
        <div className = 'App'>
            <Navbar /> 
            <div className='mainContent'>
               <h1 className='title'>Welcome to my site!</h1>
               <p className='styledText'>Use the navbar to learn more</p>
            </div>
            <Footer />
        </div>
    )
}

export default Home