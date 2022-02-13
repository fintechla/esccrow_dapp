import React from 'react'
import { FooterContainer, Footer, Conditions } from './styles'
export const FooterComponent = () => {
    return (
        <FooterContainer>
            <Footer>
                <p>&copy; 2022 FintechLab LLC</p>
                <Conditions>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </Conditions>
            </Footer>
        </FooterContainer>
    )
}
