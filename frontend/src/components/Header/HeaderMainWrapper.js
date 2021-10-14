import React from 'react'
import HeaderLogo from './HeaderLogo'
import HeaderMenu from './HeaderMenu'

import HeaderSignIn from './HeaderSignIn'
import './HeaderMainWrapper.css'
import HeaderToggle from './HeaderToggle'

function HeaderMainWrapper() {
    return (
      
       <div class="header-main-wrapper">
            
        <HeaderLogo />
        <HeaderMenu /> 
        <HeaderSignIn /> 
        <HeaderToggle />
        
        </div>
        
    )
}

export default HeaderMainWrapper
