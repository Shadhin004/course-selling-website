import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderTopWrapper from './HeaderTopWrapper'

function HeaderTop() {
    return (
        <div class="header-top d-none d-lg-block">
            <Container>
                <HeaderTopWrapper />
            </Container>
            
        </div>
    )
}

export default HeaderTop
