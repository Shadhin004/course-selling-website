import React from 'react'
import ContactForm from '../components/ContactForm'
import ContactMap from '../components/ContactMap'
import DownloadApp from '../components/DownloadApp/DownloadApp'
import PageBannerSection from '../components/PageBanner/PageBannerSection'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ContactScreen() {
    return (
        <div>
            <PageBannerSection>
                <Container>
                    <div class="page-banner-content">
                        <ul class="breadcrumb">
                            <li><Link to="#">Home</Link></li>
                            <li class="active">Contact Us</li>
                        </ul>
                        
                        <h2 class="title">Contact <span>Us</span></h2>

                    </div>
                </Container>
            </PageBannerSection>
            <ContactMap />
            <ContactForm />
            <DownloadApp />
        </div>
    )
}

export default ContactScreen
