import React from 'react'
import './HeaderMenu.css'
import { Link } from 'react-router-dom'

function HeaderMenu() {
    return (
        <div class="header-menu d-none d-lg-block">
            <ul class="nav-menu">
                <li><Link to="/">Home</Link></li>
                
                <li>
                    <a href="#">Pages </a>
                    <ul class="sub-menu">
                        <li><Link to="about.html">About</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="faq.html">FAQ</Link></li>
                        <li><Link to="404-error.html">404 Error</Link></li>
                        <li><Link to="after-enroll.html">After Enroll</Link></li>
                        <li><Link to="courses-admin.html">Instructor Dashboard (Course List)</Link></li>
                        <li><Link to="overview.html">Instructor Dashboard (Performance)</Link></li>
                        <li><Link to="students.html">Students</Link></li>
                        <li><Link to="reviews.html">Reviews</Link></li>
                        <li><Link to="engagement.html">Course engagement</Link></li>
                        <li><Link to="traffic-conversion.html">Traffic & conversion</Link></li>
                        <li><Link to="messages.html">Messages</Link></li>
                    </ul>
                </li>
                <li>
                    <a href="#">All Course</a>
                    <ul class="sub-menu">
                        <li><Link to="courses.html">Courses</Link></li>
                        <li><Link to="courses-details.html">Courses Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                    
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

        </div>
    )
}

export default HeaderMenu
