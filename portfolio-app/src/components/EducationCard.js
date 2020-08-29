import React from 'react'
import '../css/JobCard.css'
import data from '../data/education'

function EducationCard(props) {

    console.log(data)

    return(
        <div className="EducationCard">
            <h3>{data[0].university}</h3>
            <h3>{data[0].degree}</h3>
            <h3>{data[0].link}</h3>
            <h3>{data[0].gradDate}</h3>       
        </div>
    )

}

export default EducationCard