import React from 'react'
import './HeaderMenu.css'
import { Link } from 'react-router-dom'

function HeaderMenu() {
    return (
        <div class="header-menu d-none d-lg-block">
            <ul class="nav-menu">
                <li><Link to="/">Home</Link></li>
                
                <li>
                    <a href="#">Category </a>
                    <ul class="sub-menu">
                        <li><Link to="about.html">Science</Link></li>
                        <li><Link to="/register">Arts</Link></li>
                        <li><Link to="/login">Web </Link></li>
                        <li><Link to="faq.html">Software</Link></li>                                                
                    </ul>
                </li>
                <li>
                    <Link to="/courses">All Course</Link>
                    <ul class="sub-menu">
                        <li><Link to="/courses">Courses</Link></li>
                        <li><Link to="courses-details.html">Courses Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>                    
                </li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

        </div>
    )
}

export default HeaderMenu
