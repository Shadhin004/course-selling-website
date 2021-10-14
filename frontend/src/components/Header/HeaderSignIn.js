import React from 'react'
import './HeaderSignIn.css'
import { Link } from 'react-router-dom'

function HeaderSignIn() {
    return (
        <div class="header-sign-in-up d-none d-lg-block">
            <ul>
                <li><Link class="sign-in" to="/login">Sign In</Link></li>
                <li><Link class="sign-up" to="/register">Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default HeaderSignIn
