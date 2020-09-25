import React from 'react'
import '../css/JobCard.css'

function JobCard(props) {

    var points = props.job.points.map(item => <li>{item}</li>)

    return(
        <div className="JobCard">
            <div>
                <h3>{props.job.title} @   
                    <a
                    href={props.job.link} 
                    target="_blank" 
                    rel="noopener noreferrer">
                    {' ' + props.job.company}
                    </a>
                </h3>
                <h4>{props.job.date}</h4>
                <ul>
                    {points}
                </ul>
            </div>
        </div>
    )

}

export default JobCard