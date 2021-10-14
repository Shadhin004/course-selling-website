import React from 'react'
import CoursesBox from './CoursesBox'
import SliderContent from './SliderContent'
import { Container } from 'react-bootstrap'
import SliderShape from './SliderShape'
import RatingBox from './RatingBox'
import SliderImage from './SliderImage'
import SliderVideo from './SliderVideo'

function SliderSection() {
    return (
        <div class="section slider-section">
            <SliderShape />
            <Container>
                <SliderContent />
            </Container>
            <CoursesBox />
            <RatingBox />
            <SliderImage />
            <SliderVideo />
        </div>
    )
}

export default SliderSection
