import React from 'react'

import { Container, UserType, UserTypeAction, WrapperUserType,InputAction, WrapperAction, CallToAction, ActionAddress, ActionSend, TransactionButton, CallTransactionButton } from './styles'
import NearMain from './NearMain.svg'
export const TransactionComponent = () => {
    return (
        <Container>
            <UserType>
                <WrapperUserType>
                    <UserTypeAction>Buy</UserTypeAction>
                </WrapperUserType>
                <WrapperUserType>
                    <UserTypeAction>Sell</UserTypeAction>
                </WrapperUserType>
            </UserType>
            <WrapperAction>
                <CallToAction>
                    <ActionAddress>
                        <label>I will buy</label>
                        <InputAction type="text" placeholder='Contract address'></InputAction>
                    </ActionAddress>
                    <img src={NearMain}></img>
                </CallToAction>
                <CallToAction>
                    <ActionAddress>
                        <label>For</label>
                        <InputAction type="text" placeholder='0.0'></InputAction>
                    </ActionAddress>
                    <img src={NearMain}></img>
                </CallToAction>
                <CallTransactionButton>
                    <TransactionButton>Begin transaction</TransactionButton>
                </CallTransactionButton>
            </WrapperAction>
        </Container>
    )
}
