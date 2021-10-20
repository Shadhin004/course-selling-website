import React, {useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { register } from '../actions/userActions'

import PageBannerIcon from '../components/PageBanner/PageBannerIcon'
import { useSelector, useDispatch } from 'react-redux'

function RegisterScreen({location, history}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')


    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const {error, loading, userInfo} = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
                     
        }
    }, [history, userInfo, redirect]) 

    const submitHandler = (e) =>{
        e.preventDefault()
        if (password !== confirmPassword){
            setMessage('Passwords do not Match!')
        } else{
            dispatch(register(name, email, password))
        }
        
    }


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
                                    <form action="#" onSubmit={submitHandler}>
                                        
                                        <div class="single-form" controlID="name">
                                            <input type="text" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        
                                        <div class="single-form" controlID="email">
                                            <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        
                                        <div class="single-form" controlID="password">
                                            <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                        
                                        <div class="single-form" controlID="passwordConfirm">
                                            <input type="password" required placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                        </div>

                                        {message && <p class="mt-5" style={{color: 'red'}}>{message}</p>}
                                        
                                        <div class="single-form">
                                            <button type="submit" class="btn btn-primary btn-hover-dark w-100" >Create an account</button>
                                            <p class="mt-5"> Already Have an Account? </p>
                                            <Link class="btn btn-secondary btn-outline w-100" to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
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
