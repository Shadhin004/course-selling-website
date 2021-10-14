import React from 'react'
import { Container } from 'react-bootstrap'

function HowItWorks() {
    return (
        <div class="section section-padding mt-n1">
            <Container>
                <div class="section-title shape-03 text-center">
                    <h5 class="sub-title">Over 1,235+ Course</h5>
                    <h2 class="main-title">How It <span> Work?</span></h2>
                </div>
               
                <div class="how-it-work-wrapper">

                   <div class="single-work">
                        <img class="shape-1" src="/images/shape/shape-15.png" alt="Shape" />
                        <div class="work-icon">
                            <i class="flaticon-transparency"></i>
                        </div>
                        <div class="work-content">
                            <h3 class="title">Find Your Course</h3>
                            <p>It has survived not only centurie also leap into electronic.</p>
                        </div>
                    </div>
                    
                    <div class="work-arrow">
                        <img class="arrow" src="/images/shape/shape-17.png" alt="Shape" />
                    </div>
                    
                    <div class="single-work">
                        <img class="shape-2" src="/images/shape/shape-15.png" alt="Shape" />

                        <div class="work-icon">
                            <i class="flaticon-forms"></i>
                        </div>
                        <div class="work-content">
                            <h3 class="title">Book A Seat</h3>
                            <p>It has survived not only centurie also leap into electronic.</p>
                        </div>
                    </div>
                    
                    <div class="work-arrow">
                        <img class="arrow" src="/images/shape/shape-17.png" alt="Shape" />
                    </div>
                    
                    <div class="single-work">
                        <img class="shape-3" src="/images/shape/shape-16.png" alt="Shape" />

                        <div class="work-icon">
                            <i class="flaticon-badge"></i>
                        </div>
                        <div class="work-content">
                            <h3 class="title">Get Certificate</h3>
                            <p>It has survived not only centurie also leap into electronic.</p>
                        </div>
                    </div>
                 

                </div>

            
            </Container>
            
        </div>
    )
}

export default HowItWorks
