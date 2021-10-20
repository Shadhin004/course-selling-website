import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

import PageBannerIcon from '../components/PageBanner/PageBannerIcon'
import Message from '../components/Message'
import { Link } from 'react-router-dom'

function LoginScreen({location, history}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
                     
        }
    }, [history, userInfo, redirect]) 

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div>
            
            
            <div class="section page-banner">
                <img class="shape-1 animation-round" src="/images/shape/shape-8.png" alt="Shape" />
                <img class="shape-2" src="/images/shape/shape-23.png" alt="Shape" />
            <Container>
            <div class="page-banner-content">
                <ul class="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li class="active">Login</li>
                </ul>
                <h2 class="title">Login <span>Form</span></h2>
            </div>
            </Container>
            <PageBannerIcon />

                <img class="shape-3" src="/images/shape/shape-24.png" alt="Shape" />
                <img class="shape-author" src="/images/author/author-11.jpg" alt="Shape" />            
            </div>


            <div>
                <Container>
                {error && <center class="mt-5">Username or Password did not match...</center>}
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
                                <h3 class="title">Login <span>Now</span></h3>

                                <div class="form-wrapper">
                                    <form action="#" onSubmit={submitHandler}>
                                        
                                        <div class="single-form" controlId='email'>
                                            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        
                                        <div class="single-form" controlId='password'>
                                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        
                                        <div class="single-form">
                                            <button class="btn btn-primary btn-hover-dark w-100" type='submit' >Login</button>
                                            <p class="mt-5"> Don't Have an Account? </p>
                                            <Link class="btn btn-secondary btn-outline w-100" to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register Here</Link>
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

export default LoginScreen
