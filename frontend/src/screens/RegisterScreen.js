import React from 'react'
import { Container } from 'react-bootstrap'
import PageBannerSection from '../components/PageBanner/PageBannerSection'
import PageBannerIcon from '../components/PageBanner/PageBannerIcon'

function RegisterScreen() {
    return (
        <div>
            
            <div class="section page-banner">
            <img class="shape-1 animation-round" src="/images/shape/shape-8.png" alt="Shape" />
            <img class="shape-2" src="/images/shape/shape-23.png" alt="Shape" />
            <Container>
            <div class="page-banner-content">
                <ul class="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li class="active">Register Form</li>
                </ul>
                <h2 class="title">Register <span>Now</span></h2>
            </div>
            </Container>
            <PageBannerIcon />

            <img class="shape-3" src="/images/shape/shape-24.png" alt="Shape" />
            <img class="shape-author" src="/images/author/author-11.jpg" alt="Shape" />            
        </div>

            <div class="section section-padding">
                <Container>
                <div class="register-login-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-6">

                            
                            <div class="register-login-images">
                                <div class="shape-1">
                                    <img src="/images/shape/shape-26.png" alt="Shape" />
                                </div>


                                <div class="images">
                                    <img src="/images/register-login.png" alt="Register Login" />
                                </div>
                            </div>
                            

                        </div>
                        <div class="col-lg-6">

                            
                            <div class="register-login-form">
                                <h3 class="title">Registration <span>Now</span></h3>

                                <div class="form-wrapper">
                                    <form action="#">
                                        
                                        <div class="single-form">
                                            <input type="text" placeholder="Name" />
                                        </div>
                                        
                                        <div class="single-form">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                        
                                        <div class="single-form">
                                            <input type="password" placeholder="Password" />
                                        </div>
                                        
                                        <div class="single-form">
                                            <input type="password" placeholder="Confirm Password" />
                                        </div>
                                        
                                        <div class="single-form">
                                            <button class="btn btn-primary btn-hover-dark w-100">Create an account</button>
                                            <a class="btn btn-secondary btn-outline w-100" href="#">Sign up with Google</a>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
                </Container>
            </div>
            
        </div>
    )
}

export default RegisterScreen
