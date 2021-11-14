import React, {useState, useEffect} from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'

import { useSelector, useDispatch } from 'react-redux'

function ProfileScreen({ history }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()    

    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')                     
        }else{
            if(!user || !user.name || success){
                dispatch({
                    type:USER_UPDATE_PROFILE_RESET
                })
                dispatch(getUserDetails('profile'))
            }else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user, success]) 

    const submitHandler = (e) =>{
        e.preventDefault()
        if (password !== confirmPassword){
            setMessage('Passwords do not Match!')
        } else{
            dispatch(updateUserProfile({
                'id':user._id,
                'name':name,
                'email':email,
                'password':password,                
            }))            
        }
        
    }
    return (
        <div>
            <div class="section page-banner mb-5">
                <img class="shape-1 animation-round" src="/images/shape/shape-8.png" alt="Shape" />
                <img class="shape-2" src="/images/shape/shape-23.png" alt="Shape" />
                <Container>
                    <div class="page-banner-content">
                        <ul class="breadcrumb">
                            <li><Link to="/">Home</Link></li>
                            <li class="active">Profile</li>
                        </ul>
                        <h2 class="title">Pro<span>file</span></h2>
                    </div>
                </Container>
                    <div class="shape-icon-box">
                        <img class="icon-shape-1 animation-left" src="/images/shape/shape-5.png" alt="Shape" />
                            <div class="box-content">
                                <div class="box-wrapper">
                                <i class="fas fa-address-card"></i>
                                </div>
                            </div>
                        <img class="icon-shape-2" src="/images/shape/shape-6.png" alt="Shape" />
                    </div>

                <img class="shape-3" src="/images/shape/shape-24.png" alt="Shape" />
                <img class="shape-author" src="/images/author/author-11.jpg" alt="Shape" />            
            </div>  
            <Container>
                <Row class="mt-5">
                    <Col md={3}>
                        <h2>User Profile</h2>
                        {success && <center class="mt-5">Username or Password did not match...</center>}
                                    <form action="#" onSubmit={submitHandler}>
                                        
                                        <div class="single-form" controlID="name">
                                            <p> Name: </p><input type="text" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        
                                        <div class="single-form" controlID="email">
                                        <p> Email: </p><input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        
                                        <div class="single-form" controlID="password">
                                        <p> Password: </p><input type="password"  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        </div>
                                        
                                        <div class="single-form" controlID="passwordConfirm">
                                        <p>Confirm Password: </p><input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                        </div>

                                        {message && <p class="mt-5" style={{color: 'red'}}>{message}</p>}
                                        
                                        <div class="single-form mb-5">
                                            <button type="submit" class="btn btn-primary btn-hover-dark w-100">Update</button>                                            
                                        </div>
                                        
                                    </form>
                                
                    </Col>
                    <Col md={9}>
                        <h2>My Courses</h2>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default ProfileScreen
