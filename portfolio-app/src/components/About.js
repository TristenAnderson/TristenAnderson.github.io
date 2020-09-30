import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import '../css/About.css'

function About() {

    const skills = ['JavaScript', 'R', 'C++', 'React', 'Node.js', 'Blue Prism']

    return(
        <div>

            <div className='nav-center'> 
                <Navbar /> 
            </div>

            <div className="header-wrapper">
                <h1>About Me</h1>    
            </div>

            <div className='main-content'>
               <div className='about-wrapper'>
                    <div className="about-container">
                        <div className='styledText'>
                            <p>
                                Hi, my name is Tristen Anderson. I am a Computer Science and Mathematics senior at
                                <a href='https://www.niu.edu/' target="_blank" rel="noopener noreferrer"> Northern Illinois Univeristy. </a>
                                I am set to graduate in May of 2021, and am currently seeking a full-time position as a software engineer. 
                            </p>
                            
                            <p>
                                Over the course of the past year I had the privilege of interning at
                                <a href='https://www.discover.com/' target="_blank" rel="noopener noreferrer"> Discover Financial Services </a>
                                as a full-stack developer. In my time there, I had the opportunity to work on a variety of projects, including several web applications
                                and robotic process automations.
                            </p>

                            <p>Here are some of the technologies I have worked with recently</p>
                        </div>

                        <div className='recent-tech'>
                            {skills.map((skill, i) => <li key={i}>{skill}</li>)}
                        </div>
                    </div> 
               </div>
            </div>

            <Footer />
            
        </div>
    )
}

export default About