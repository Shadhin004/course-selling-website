import React from 'react'
import { Container } from 'react-bootstrap'
import PageBannerContent from './PageBannerContent'
import PageBannerIcon from './PageBannerIcon'

function PageBannerSection() {
    return (
        <div class="section page-banner">
            <img class="shape-1 animation-round" src="/images/shape/shape-8.png" alt="Shape" />
            <img class="shape-2" src="/images/shape/shape-23.png" alt="Shape" />

            <Container>
            <PageBannerContent />
            </Container>

            <PageBannerIcon />

            <img class="shape-3" src="/images/shape/shape-24.png" alt="Shape" />
            <img class="shape-author" src="/images/author/author-11.jpg" alt="Shape" />            
        </div>
    )
}

export default PageBannerSection
