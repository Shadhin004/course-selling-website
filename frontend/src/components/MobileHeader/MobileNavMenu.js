import React from 'react'

function MobileNavMenu() {
    return (
        <div class="mobile-menu-items">
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li>
                    <a href="#">All Course</a>
                    <ul class="sub-menu">
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="courses-details.html">Courses Details</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Pages </a>
                    <ul class="sub-menu">
                        <li><a href="about.html">About</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="404-error.html">404 Error</a></li>
                        <li><a href="after-enroll.html">After Enroll</a></li>
                        <li><a href="courses-admin.html">Instructor Dashboard (Course List)</a></li>
                        <li><a href="overview.html">Instructor Dashboard (Performance)</a></li>
                        <li><a href="students.html">Students</a></li>
                        <li><a href="reviews.html">Reviews</a></li>
                        <li><a href="engagement.html">Course engagement</a></li>
                        <li><a href="traffic-conversion.html">Traffic & conversion</a></li>
                        <li><a href="messages.html">Messages</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Blog</a>
                    <ul class="sub-menu">
                        <li>
                            <a href="#">Blog</a>
                            <ul class="sub-menu">
                                <li><a href="blog-grid.html">Blog</a></li>
                                <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Blog Details</a>
                            <ul class="sub-menu">
                                <li><a href="blog-details-left-sidebar.html">Blog Details Left Sidebar</a></li>
                                <li><a href="blog-details-right-sidebar.html">Blog Details Right Sidebar</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
            </ul>

        </div>
    )
}

export default MobileNavMenu
