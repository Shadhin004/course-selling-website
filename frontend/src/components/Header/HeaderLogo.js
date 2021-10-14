import React from 'react'
import { Link } from 'react-router-dom'


function HeaderLogo() {
    return (
        <div class="headerlogo">
            <Link to="/"><img src="/images/logo.png" alt="Logo" /></Link>
        </div>
    )
}

export default HeaderLogo
