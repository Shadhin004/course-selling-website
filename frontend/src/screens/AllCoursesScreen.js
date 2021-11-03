import {React, useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'

import Loader from '../components/Loader'
import Message from '../components/Message'
import Courses from '../components/Courses'

import { listCourses } from '../actions/courseActions'


function AllCoursesScreen() {

    const dispatch = useDispatch()
    const courseList = useSelector(state => state.courseList)
    const { error, loading, courses } = courseList

    useEffect(()=>{
        dispatch(listCourses())


    }, [dispatch])

    return (
        <div>
            <div class="section page-banner">
                <Container>
                <img class="shape-1 animation-round" src="/images/shape/shape-8.png" alt="Shape" />
                <img class="shape-2" src="/images/shape/shape-23.png" alt="Shape" />
                
                <div class="page-banner-content">
                    <ul class="breadcrumb">
                        <li><a href="/">Home</a></li>
                        <li class="active">All Courses</li>
                    </ul>
                    <h2 class="title">All <span>Courses</span></h2>
                </div>
                

                <img class="shape-3" src="/images/shape/shape-24.png" alt="Shape" />
                <img class="shape-author" src="/images/author/author-11.jpg" alt="Shape" />  
                </Container>          
            </div>
            <Container>
                {loading ? <Loader />
                :error ? <Message variant='danger'>{error}</Message>
                    :
                    <Row class='mb-5'>                    
                        {courses.map(courses => (
                            <Col key={courses._id} sm={12} md={6} lg={4} xl={4}>
                                <Courses courses={courses} />
                                
                            </Col>
                        ))}                    
                    </Row>    
                }            
            </Container>
        </div>
    )
}

export default AllCoursesScreen
