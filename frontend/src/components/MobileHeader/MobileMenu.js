import React from 'react'
import MobileNavMenu from './MobileNavMenu'
import MobileSignUp from './MobileSignUp'
import MobileTopMedal from './MobileTopMedal'

function MobileMenu() {
    return (
        <div class="mobile-menu">
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
