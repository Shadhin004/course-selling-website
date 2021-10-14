import React from 'react'

function ContactForm() {
    return (
        <div class="section section-padding">
            <div class="container">

               
                <div class="contact-wrapper">
                    <div class="row align-items-center">
                        <div class="col-lg-6">

                            
                            <div class="contact-info">

                                <img class="shape animation-round" src="/images/shape/shape-12.png" alt="Shape" />

                                
                                <div class="single-contact-info">
                                    <div class="info-icon">
                                        <i class="flaticon-phone-call"></i>
                                    </div>
                                    <div class="info-content">
                                        <h6 class="title">Phone No.</h6>
                                        <p><a href="tel:88193326867">(88) 193 326 867</a></p>
                                    </div>
                                </div>
                                
                                <div class="single-contact-info">
                                    <div class="info-icon">
                                        <i class="flaticon-email"></i>
                                    </div>
                                    <div class="info-content">
                                        <h6 class="title">Email Address.</h6>
                                        <p><a href="mailto:edule100@gmail.com">edule100@gmail.com</a></p>
                                    </div>
                                </div>
                                
                                <div class="single-contact-info">
                                    <div class="info-icon">
                                        <i class="flaticon-pin"></i>
                                    </div>
                                    <div class="info-content">
                                        <h6 class="title">Office Address.</h6>
                                        <p>Talga, Alabama, USA</p>
                                    </div>
                                </div>
                                
                            </div>
                            

                        </div>
                        <div class="col-lg-6">

                         
                            <div class="contact-form">
                                <h3 class="title">Get in Touch <span>With Us</span></h3>

                                <div class="form-wrapper">
                                    <form id="contact-form" action="https://htmlmail.hasthemes.com/humayun/edule-contact.php" method="POST">
                                        
                                        <div class="single-form">
                                            <input type="text" name="name" placeholder="Name" />
                                        </div>
                                        
                                        <div class="single-form">
                                            <input type="email" name="email" placeholder="Email" />
                                        </div>
                                        
                                        <div class="single-form">
                                            <input type="text" name="subject" placeholder="Subject" />
                                        </div>
                                       
                                        <div class="single-form">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                       
                                        <p class="form-message"></p>
                                       
                                        <div class="single-form">
                                            <button class="btn btn-primary btn-hover-dark w-100">Send Message <i class="flaticon-right"></i></button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
                           

                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default ContactForm
