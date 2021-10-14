import React from 'react'
import { Container } from 'react-bootstrap'
import CourseTab from './CourseTab'
import CourseTop from './CourseTop'


function CourseSection() {
    return (
        <div class="section section-padding-02">
            <Container>
                <CourseTop />
                <CourseTab />
            </Container>
            
        </div>
    )
}

export default CourseSection
