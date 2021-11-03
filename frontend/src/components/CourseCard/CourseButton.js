import React from 'react'
import { Link } from 'react-router-dom'

function CourseButton() {
    return (
        <div class="courses-btn text-center">
            <Link to="/courses" class="btn btn-secondary btn-hover-primary">All Courses</Link>
        </div>
    )
}

export default CourseButton
