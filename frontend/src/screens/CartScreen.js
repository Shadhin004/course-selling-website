import React from 'react'

import PageBannerSection from '../components/PageBanner/PageBannerSection'
import PageBannerIcon from '../components/PageBanner/PageBannerIcon'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CartScreen() {
    return (
        <div>
           
           <div class="section page-banner">
                <img class="shape-1 animation-round" src="/images/shape/shape-8.png" alt="Shape" />
                <img class="shape-2" src="/images/shape/shape-23.png" alt="Shape" />
            <Container>
            <div class="page-banner-content">
                <ul class="breadcrumb">
                    <li><Link to="/">Home</Link></li>
                    <li class="active">Cart</li>
                </ul>
                <h2 class="title">Ca<span>rt</span></h2>
            </div>
            </Container>
            <div class="shape-icon-box">

            <img class="icon-shape-1 animation-left" src="/images/shape/shape-5.png" alt="Shape" />

            <div class="box-content">
                <div class="box-wrapper">
                    <img src="/images/icon/shopping-cart.png"></img>
                </div>
            </div>

            <img class="icon-shape-2" src="/images/shape/shape-6.png" alt="Shape" />

        </div>

                <img class="shape-3" src="/images/shape/shape-24.png" alt="Shape" />
                <img class="shape-author" src="/images/author/author-11.jpg" alt="Shape" />            
            </div>
        </div>
    )
}

export default CartScreen
