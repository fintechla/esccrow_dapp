import React from 'react'

import { Container, UserType, UserTypeAction, CallToAction, ActionAddress, ActionSend } from './styles'
import NearMain from './NearMain.svg'
export const TransactionComponent = () => {
    return (
        <Container>
            <UserType>
                <UserTypeAction>Buy</UserTypeAction>
                <UserTypeAction>Sell</UserTypeAction>
            </UserType>
            <CallToAction>
                <ActionAddress>I will buy</ActionAddress>
                <img src={NearMain}></img>
            </CallToAction>
            <CallToAction>
                <ActionSend>For</ActionSend>
                <img src={NearMain}></img>
            </CallToAction>
        </Container>
    )
}