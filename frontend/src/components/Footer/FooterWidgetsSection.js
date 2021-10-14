import React from 'react'
import { Container, Row } from 'react-bootstrap'
import FooterWidget1 from './FooterWidget1'
import FooterWidget2 from './FooterWidget2'
import FooterWidget3 from './FooterWidget3'

function FooterWidgetsSection() {
    return (
        <div class="footer-widget-section">
            
            <img class="shape-1 animation-down" src="/images/shape/shape-21.png" alt="Shape" />

            <Container>
                <Row>
                    <FooterWidget1 />
                    <FooterWidget2 />
                    <FooterWidget3 />
                </Row>
            </Container>    

            <img class="shape-2 animation-left" src="/images/shape/shape-22.png" alt="Shape" />

        </div>
    )
}

export default FooterWidgetsSection
