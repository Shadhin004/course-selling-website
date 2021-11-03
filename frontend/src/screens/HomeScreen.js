import React, { useState, useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap'

import Courses from '../components/Courses'
import SliderSection from '../components/Slider/SliderSection'
import CourseSection from '../components/CourseCard/CourseSection'
import Coursewrapper from '../components/CourseCard/Coursewrapper'
import CourseButton from '../components/CourseCard/CourseButton'
import CallToAction from '../components/CallToAction/CallToAction'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import DownloadApp from '../components/DownloadApp/DownloadApp'
import BrandLogo from '../components/BrandLogo/BrandLogo'
import Loader from '../components/Loader'
import Message from '../components/Message'

 
import { listCourses } from '../actions/courseActions'

import { useDispatch, useSelector } from 'react-redux'






function HomeScreen() {
    const dispatch = useDispatch()
    const courseList = useSelector(state => state.courseList)
    const { error, loading, courses } = courseList

    useEffect(()=>{
        dispatch(listCourses())


    }, [dispatch])

    return (
        <div>
            <SliderSection />
            <div>
                <CourseSection />
                
            <Coursewrapper />  
            <Container>
                {loading ? <Loader />
                :error ? <Message variant='danger'>{error}</Message>
                    :
                    <Row >                    
                        {courses.map(courses => (
                            <Col key={courses._id} sm={12} md={6} lg={4} xl={4}>
                                <Courses courses={courses} />
                                
                            </Col>
                        ))}                    
                    </Row>    
                }
            <CourseButton />
            </Container>

            <CallToAction />
            <HowItWorks />
            <DownloadApp />
            <BrandLogo />
            
            
            </div>
        </div>
    )
}

export default HomeScreen
