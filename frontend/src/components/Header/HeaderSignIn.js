import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './HeaderSignIn.css'
import './HeaderMenu.css'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userActions'

function HeaderSignIn() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()
    const logoutHandler = () =>{
        dispatch(logout())
    }
    return (
        <div class="header-menu d-none d-lg-block">
            <ul class="nav-menu">
                <li><Link class="sign-in" to="/cart"> <i class="fas fa-shopping-cart"></i> Cart</Link></li>

                {userInfo ? (
                    <li>
                        <a to="#" id="username"> <i class="fas fa-user"></i> {userInfo.name}</a>
                        <ul class="sub-menu">
                            <li><Link to="/profile">Profile</Link></li>
                            <li><a href="#" onClick={logoutHandler}>Logout</a></li>
                                                                        
                        </ul>
                    </li>
                ) : (
                    <li><Link class="sign-up" to="/login"> <i class="fas fa-user-lock"></i> Login</Link></li>
                )}
                
            </ul>
        </div>
    )
}

export default HeaderSignIn
