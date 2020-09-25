import React from 'react'
import '../css/EducationCard.css'

function EducationCard(props) {

const degrees = props.ed.degree.map(item => <h5>{item}</h5>)

    return(
        <div className='education-card'>
            <img src="./images/NIU.png"></img>
            <div>
                <h3>{props.ed.university}</h3>
                <h6>{props.ed.date}</h6>
                {degrees}
                <h6>GPA: {props.ed.gpa}</h6>
            </div>
        </div>
    )
}

export default EducationCard