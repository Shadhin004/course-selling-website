import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { Link } from 'react-router-dom'


function CourseCard({ courses }) {
    return (

        <div>
            <div class="single-courses">
                <div class="courses-images">
                    <Link to={`/courses/${courses._id}`}><img src={`http://127.0.0.1:8000${courses.image}`} alt="Courses" /></Link>
                </div>
                <div class="courses-content">
                    <div class="courses-author">
                        <div class="author">
                            <div class="author-thumb">
                                <Link to={`/courses/${courses._id}`}><img src={`http://127.0.0.1:8000${courses.instructorImage}`} alt="Author" /></Link>
                            </div>
                            <div class="author-name">
                                <Link class="name" to="#">{courses.author}</Link>
                            </div>
                        </div>
                        <div class="tag">
                            <Link to="#">{courses.category}</Link>
                        </div>
                    </div>

                    <h4 class="title"><Link to={`/courses/${courses._id}`}>{courses.name}</Link></h4>
                    <div class="courses-meta">
                        <span> <i class="icofont-clock-time"></i>{courses.duration}</span>
                        <span> <i class="icofont-read-book"></i> {courses.lectureNum} Lectures </span>
                    </div>
                    <div class="courses-price-review">
                        <div class="courses-price">
                            <span class="sale-parice">${courses.salePrice}</span>
                            <span class="old-parice">${courses.price}</span>
                        </div>
                        <div class="courses-review">
                            <span class="rating-count">{courses.rating}</span>
                            <span class='rating-star'>
                                <span class="rating-bar" style={{ width: `${courses.ratingWidth}%` }}></span>                                    
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default CourseCard
