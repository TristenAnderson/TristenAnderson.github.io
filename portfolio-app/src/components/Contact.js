import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import OutlineButton from './OutlineButton'

function Contact() {

    return(
        <div>
            <Navbar /> 
            <div className='mainContent'>
                CONTACT ME 
                <OutlineButton 
                to='mailto:tristendanderson@gmail.com' 
                title='Email Me' 
                />
            </div>
            <Footer />
        </div>
    )
}

export default Contact