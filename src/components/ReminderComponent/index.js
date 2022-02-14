import React from 'react'
import { Container,List,Title } from './styles'
import bulbIcon from './bulb.svg'

export const ReminderComponent = () => {
    return (
        <Container>
            <Title><img src={bulbIcon}></img> Reminder</Title>
            <List>
                <li>Escrow Fee if 1.00%.</li>
                <li>Minimum is 1 Near. Maximum amount is 100 Near.</li>
                <li>Estimated time of escrow services is at least 30 minutes.</li>
            </List>
        </Container>
    )
}
