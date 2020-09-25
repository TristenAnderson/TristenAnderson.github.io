import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'
import CScourses from '../data/CSCourses'
import Mathcourses from '../data/MathCourses'
import Othercourses from '../data/OtherCourses'
import Course from './Course.js'
import '../css/Courses.css'

function Courses() {
     
    const CSCourses = CScourses.map(item => <Course name={item.name} desc={item.desc} />)
    const MathCourses = Mathcourses.map(item => <Course name={item.name} desc={item.desc} />)
    const OtherCourses = Othercourses.map(item => <Course name={item.name} desc={item.desc} />)

        return(
            <div> 
                
                <div className='nav-center'> 
                    <Navbar /> 
                </div>
                <div className="header-wrapper">
                    <h1>Here is a list of Courses I Have Taken</h1> 
                </div>
                <div className='main-content'>
                    <div className='courses-wrapper'>

                        <h1>Computer Science Courses</h1>
                        <div className="courses-container"> 
                            {CSCourses}
                        </div>

                        <h1>Applied Mathematics Courses</h1>
                        <div className="courses-container">  
                            {MathCourses}
                        </div>

                        <h1>Some Other Courses I've Taken</h1>
                        <div className="courses-container">  
                            {OtherCourses}
                        </div>

                    </div>
                </div>

                <Footer />
            </div>
        )
}

export default Courses