import React from 'react'
import { Link } from 'react-router-dom'

function PageBannerContent() {
    return (
        <div class="page-banner-content">
            <ul class="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li class="active">Course Details</li>
            </ul>
            <h2 class="title">Course <span>Details</span></h2>
        </div>
    )
}

export default PageBannerContent
