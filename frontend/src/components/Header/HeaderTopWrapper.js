import React from 'react'
import HeaderTopLeft from './HeaderTopLeft'
import HeaderTopMedal from './HeaderTopMedal'
import HeaderTopRight from './HeaderTopRight'

function HeaderTopWrapper() {
    return (
        <div class="header-top-wrapper">
            <HeaderTopLeft />
            <HeaderTopMedal />
            <HeaderTopRight />
            
        </div>
    )
}

export default HeaderTopWrapper
