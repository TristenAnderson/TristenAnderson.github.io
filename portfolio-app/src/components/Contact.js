import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import OutlineButton from './OutlineButton'
import '../css/Contact.css'

//import MailOutlineIcon from '@material-ui/icons/MailOutline';
//import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {

    return(
        <div>
            <div className='nav-center'> 
                <Navbar /> 
            </div>

            <div className="header-wrapper">
                <h1>Contact Me</h1>
            </div>

            <div className='main-content'>
                <div className="contact-wrapper">
                    <div className='contact-card'>
                        <h1 >Get In Touch</h1>
        
                        <p>
                            My inbox is always open,
                            if you have questions or just want to get in contact send me an email.
                        </p>
                        <OutlineButton 
                            to='mailto:tristendanderson@gmail.com' 
                            title='Email Me' 
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact