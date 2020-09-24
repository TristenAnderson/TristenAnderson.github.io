import React from 'react'
import '../css/Modal.css'

class CourseModal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if (!this.props.show){
            return null
        }
        return(
            <div className="course-modal">
                <div className="modal-content">
                    <h2>{this.props.name}</h2>
                    <div className="">
                        <p>{this.props.children}</p>
                        <button 
                        onClick={e => {this.onClose(e)}}
                        className="course-button"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseModal