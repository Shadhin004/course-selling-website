import React from 'react'
import { Container } from 'react-bootstrap'
import './swiper-bundle.min.css'

function BrandLogo() {
    return (
        <div class="section section-padding-02">
            <Container>
                <div class="brand-logo-wrapper mb-5">

                    <img class="shape-1" src="/images/shape/shape-19.png" alt="Shape" />

                    <img class="shape-2 animation-round" src="/images/shape/shape-20.png" alt="Shape" />

                    <div class="section-title shape-03">
                        <h2 class="main-title">Best Supporter of <span> Edule.</span></h2>
                    </div>
                    
                    <div class="brand-logo brand-active">
                        <div class="swiper-container">
                            <div class="swiper-wrapper">

                               
                                <div class="single-brand swiper-slide">
                                    <img src="/images/brand/brand-01.png" alt="Brand" />
                                </div>
                                
                                <div class="single-brand swiper-slide">
                                    <img src="/images/brand/brand-02.png" alt="Brand" />
                                </div>
                                
                                <div class="single-brand swiper-slide">
                                    <img src="/images/brand/brand-03.png" alt="Brand" />
                                </div>
                                
                                <div class="single-brand swiper-slide">
                                    <img src="/images/brand/brand-04.png" alt="Brand" />
                                </div>
                                
                                <div class="single-brand swiper-slide">
                                    <img src="/images/brand/brand-05.png" alt="Brand" />
                                </div>
                                
                                <div class="single-brand swiper-slide">
                                    <img src="/images/brand/brand-06.png" alt="Brand" />
                                </div>
                               

                            </div>
                        </div>
                    </div>
                    
                </div>

            </Container>
        </div>
    )
}

export default BrandLogo
