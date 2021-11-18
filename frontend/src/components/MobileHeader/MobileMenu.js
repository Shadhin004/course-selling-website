import React from 'react'
import MobileNavMenu from './MobileNavMenu'
import MobileSignUp from './MobileSignUp'
import MobileTopMedal from './MobileTopMedal'

import HeaderToggle from '../Header/HeaderToggle'

function MobileMenu() {
    return (
        <div class="mobile-menu" id="mobilenavmenu">
            <a class="menu-close" href="#">
                <i class="icofont-close-line"></i>
            </a>

            <MobileTopMedal />
            <MobileSignUp />
            <MobileNavMenu />
        </div>
        
    )
}

export default MobileMenu
