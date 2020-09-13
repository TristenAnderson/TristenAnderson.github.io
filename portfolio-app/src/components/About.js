import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import '../css/About.css'

function About() {

    const styleLink = {
        color: '#5ff0ce',
        textDecoration: 'none',
    }

    const skills = ['JavaScript', 'R', 'C++', 'React', 'Node.js', 'Blue Prism']

    return(
        <div>

            <div className='NavCenter'> 
                <Navbar /> 
            </div>
         
            <div className='mainContent'>
               <div className='aboutSection'>

                    <h1 className='title'>About Me</h1>

                    <div className='styledText'>
                        <p>Hi, my name is Tristen Anderson. I am a Computer Science and Mathematics senior at
                            <a href='https://www.niu.edu/' target="_blank" rel="noopener noreferrer" style={styleLink}> Northern Illinois Univeristy. </a>
                            I am set to graduate in May of 2021, and am currently seeking a full-time position as a software engineer. 

                        </p>
                        
                        <p>Over the course of the past year I had the privilege to intern at
                            <a href='https://www.discover.com/' target="_blank" rel="noopener noreferrer" style={styleLink}> Discover Financial Services. </a>
                            In my time there, I had the opportunity to work on a variety of projects, including several full stack web apps
                             and robotic process automation.
                        </p>

                        <p>Here are some of the technologies I have worked with recently</p>
                    </div>

                    <div className='recentTech'>
                        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </div>

               </div>
            </div>

            <Footer />

        </div>
    )
}

export default About