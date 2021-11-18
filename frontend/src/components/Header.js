import React, {useState} from 'react'
import { Navbar, Nav, Container, Row, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { logout } from '../actions/userActions'

import { useSelector, useDispatch } from 'react-redux'



function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()
    const logoutHandler = () =>{
        dispatch(logout())
    }

    const [menuOpener, setMenuOpener] = useState("mobile-menu");
    function openMobileMenu(){
        setMenuOpener("mobile-menu open")
    }

    const [overlayOpener, setoverlayOpener] = useState("overlay");
    function openOverlay(){
        setoverlayOpener("overlay open")
    }

    function closeMenu(){
        setMenuOpener("mobile-menu")
        setoverlayOpener("overlay")
    }

    return (
        <>  
       
        <div class="header-section">         
            <div class="header-top d-none d-lg-block">
                <div class="container">                   
                    <div class="header-top-wrapper">
                   
                        <div class="header-top-left">
                            <p>All course 28% off for <a href="#">Liberian people’s.</a></p>
                        </div>
                        
                        <div class="header-top-medal">
                            <div class="top-info">
                                <p><i class="flaticon-phone-call"></i> <a href="tel:9702621413">(970) 262-1413</a></p>
                                <p><i class="flaticon-email"></i> <a href="mailto:address@gmail.com">address@gmail.com</a></p>
                            </div>
                        </div>
                      
                        <div class="header-top-right">
                            <ul class="social">
                                <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                                <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                                <li><a href="#"><i class="flaticon-skype"></i></a></li>
                                <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                            </ul>
                        </div>                    
                    </div>                   
                </div>
            </div>
           
            <div class="header-main">
                <div class="container">                
                    <div class="header-main-wrapper">                    
                        <div class="header-logo">
                            <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>
                        </div>
                    
                        <div class="header-menu d-none d-lg-block">
                            <ul class="nav-menu">
                                <li><Link to="/">Home</Link></li>
                                
                                <li>
                                    <a href="#">Category </a>
                                    <ul class="sub-menu">
                                        <li><Link to="about.html">Science</Link></li>
                                        <li><Link to="/register">Arts</Link></li>
                                        <li><Link to="/login">Web </Link></li>
                                        <li><Link to="faq.html">Software</Link></li>                                                
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/courses">All Course</Link>
                                    <ul class="sub-menu">
                                        <li><Link to="/courses">Courses</Link></li>
                                        <li><Link to="courses-details.html">Courses Details</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/about-us">About Us</Link>                    
                                </li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    
                        <div class="header-sign-in-up d-none d-lg-block">
                            <ul>
                                <li><a class="sign-in" href="login.html">Sign In</a></li>
                                <li><a class="sign-up" href="register.html">Sign Up</a></li>
                            </ul>
                        </div>
                    
                        <div class="header-toggle d-lg-none">
                            <a class="menu-toggle" onClick={openMobileMenu} href="javascript:void(0)">
                                <span onClick={openOverlay}></span>
                                <span></span>
                                <span></span>
                            </a>
                        </div>             
                    </div>                 
                </div>
            </div>
         

        </div>
     
        <div class={menuOpener} >

            <a class="menu-close" onClick={closeMenu} href="javascript:void(0)">
                <i class="icofont-close-line"></i>
            </a>
          
            <div class="mobile-top">
                <p><i class="flaticon-phone-call"></i> <a onClick={closeMenu} href="tel:9702621413">(970) 262-1413</a></p>
                <p><i class="flaticon-email"></i> <a onClick={closeMenu} href="mailto:address@gmail.com">address@gmail.com</a></p>
                <p><i class="fas fa-shopping-cart"></i> <Link onClick={closeMenu} to="/cart">Cart</Link></p>                
            </div>
         
            <div class="mobile-sign-in-up">
            <ul class="nav-menu">               

                {userInfo ? (
                    <li>
                        <a to="#" id="username"> <i class="fas fa-user"></i> {userInfo.name}</a>
                        <ul class="sub-menu">
                            <li onClick={closeMenu}><Link to="/profile">Profile</Link></li>
                            <li onClick={closeMenu}><a href="#" onClick={logoutHandler}>Logout</a></li>         
                                                                        
                        </ul>
                    </li>
                ) : (
                    <li onClick={closeMenu}><Link class="sign-up" to="/login"> <i class="fas fa-user-lock"></i> Login</Link></li>
                )}
                
            </ul>
            </div>
           
            <div class="mobile-menu-items">
                <ul class="nav-menu">
                    <li onClick={closeMenu}><Link to="/">Home</Link></li>
                    
                    <li>
                        <a href="#">Category </a>
                        <ul class="sub-menu">
                            <li onClick={closeMenu}><Link to="about.html">Science</Link></li>
                            <li onClick={closeMenu}><Link to="/register">Arts</Link></li>
                            <li onClick={closeMenu}><Link to="/login">Web </Link></li>
                            <li onClick={closeMenu}><Link to="faq.html">Software</Link></li>                                                
                        </ul>
                    </li>
                    <li onClick={closeMenu}>
                        <Link to="/courses">All Course</Link>
                        <ul class="sub-menu">
                            <li onClick={closeMenu}><Link to="/courses">Courses</Link></li>
                            <li onClick={closeMenu}><Link to="courses-details.html">Courses Details</Link></li>
                        </ul>
                    </li>
                    <li onClick={closeMenu}>
                        <Link to="/about-us">About Us</Link>                    
                    </li>
                    <li onClick={closeMenu}><Link to="/contact">Contact</Link></li>
                </ul>

            </div>
           
            <div class="mobile-social">
                <ul class="social">
                    <li><a href="#"><i class="flaticon-facebook"></i></a></li>
                    <li><a href="#"><i class="flaticon-twitter"></i></a></li>
                    <li><a href="#"><i class="flaticon-skype"></i></a></li>
                    <li><a href="#"><i class="flaticon-instagram"></i></a></li>
                </ul>
            </div>
           

        </div>
        
        <div class={overlayOpener} onClick={closeMenu}></div>
        

        </>
    )
}

export default Header
