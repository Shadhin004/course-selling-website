import React from 'react'
import { Link } from 'react-router-dom'

function FooterWidget2() {
    return (
        <div class="col-lg-6 order-md-3 order-lg-2">

                            
            <div class="footer-widget-link">

                
                <div class="footer-widget">
                    <h4 class="footer-widget-title">Category</h4>

                    <ul class="widget-link">
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                        <li><a href="#">Graphic Design</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">Business Analytics</a></li>
                        <li><a href="#">Marketing</a></li>
                    </ul>

                </div>
                
                <div class="footer-widget">
                    <h4 class="footer-widget-title">Quick Links</h4>

                    <ul class="widget-link">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Discussion</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Customer Support</a></li>
                        <li><a href="#">Course FAQ’s</a></li>
                    </ul>

                </div>
            

            </div>
                            

        </div>
    )
}

export default FooterWidget2
