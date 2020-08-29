import React from 'react'
import '../css/JobCard.css'

function JobCard(props) {

    var points = props.job.points.map(item => <li>{item}</li>)

    const Style = {
        color: "#20e4b0",
    }

    return(
        <div className="JobCard">
            <h3 className="JobHeader">{props.job.title} @ 
                <a href={props.job.link} className="CompanyLink" target="_blank" rel="noopener noreferrer" onMouseOver={Style}> {props.job.company}</a>
            </h3>
            <h4 className="JobDates">{props.job.date}</h4>
            <ul className="JobBullets">
                {points}
            </ul>
        </div>
    )

}

export default JobCard