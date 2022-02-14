import React from 'react'
import { Container,List,ListItem,Title } from './styles'
import bulbIcon from './bulb.svg'

export const ReminderComponent = () => {
    return (
        <Container>
            <Title><img src={bulbIcon}></img> Reminder</Title>
            <List>
                <ListItem>Escrow Fee if 1.00%.</ListItem>
                <ListItem>Minimum is 1 Near. Maximum amount is 100 Near.</ListItem>
                <ListItem>Estimated time of escrow services is at least 30 minutes.</ListItem>
            </List>
        </Container>
    )
}
