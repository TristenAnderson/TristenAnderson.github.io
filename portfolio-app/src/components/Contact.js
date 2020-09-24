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
            <div className='NavCenter'> 
                <Navbar /> 
            </div>

            <div className='mainContent'>
                <div className="contact-wrapper">
                    <div className='contactCard'>
                        <h1 className='title'>Get In Touch</h1>
                        <div className='linkBar'>
                            {/*possible feature*/}
                        </div>
                        <p className='contactDesc'>My inbox is always open,
                            if you have questions or just want to get in contact send me an email. I will do my best to reply,
                            please let me know you are from my site.
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