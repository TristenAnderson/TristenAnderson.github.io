import React from 'react'
import CourseModal from './CourseModal'
import '../css/Course.css'

class Courses extends React.Component {

    state = {show: false}
    showModal = e => {
        this.setState({
            show: !this.state.show
        })
        console.log(this.state.show)
    }

    render(){
        return(
            <div className="course-container"> 

                <button 
                onClick={e => {this.showModal(e)}} 
                className="course-button"
                >
                    {this.props.name}
                </button>

                <CourseModal 
                onClose={this.showModal} 
                show={this.state.show} 
                name={this.props.name}
                >
                    {this.props.desc}
                </CourseModal>
                
            </div>
        )
    }
}

export default Courses