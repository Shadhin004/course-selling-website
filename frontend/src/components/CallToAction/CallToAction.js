import React from 'react'
import { Container } from 'react-bootstrap'

function CallToAction() {
    return (
        <div class="section section-padding-02">
            <Container>
            <div class="call-to-action-wrapper">

                <img class="cat-shape-01 animation-round" src="/images/shape/shape-12.png" alt="Shape" />
                <img class="cat-shape-02" src="/images/shape/shape-13.svg" alt="Shape" />
                <img class="cat-shape-03 animation-round" src="/images/shape/shape-12.png" alt="Shape" />

                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="section-title shape-02">
                            <h5 class="sub-title">Become A Instructor</h5>
                            <h2 class="main-title">You can join with Edule as <span>a instructor?</span></h2>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="call-to-action-btn">
                            <a class="btn btn-primary btn-hover-dark" href="contact.html">Drop Information</a>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
            
        </div>
    )
}

export default CallToAction
