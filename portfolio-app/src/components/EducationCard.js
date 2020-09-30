import React from 'react'
import '../css/EducationCard.css'

function EducationCard(props) {

const degrees = props.ed.degree.map(item => <h5>{item}</h5>)

    return(
        <div className='education-card'>
            <img src={props.ed.img} alt={props.ed.imgDesc}></img>
            <div>
                <a 
                href={props.ed.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                    <h3>{props.ed.university}</h3>
                </a>
                <h6>{props.ed.date}</h6>
                {degrees}
                <h6>GPA: {props.ed.gpa}</h6>
            </div>
        </div>
    )
}

export default EducationCard