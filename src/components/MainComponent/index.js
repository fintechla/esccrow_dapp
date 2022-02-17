import React from 'react'
import { Main } from './style'

import { HeroComponent } from '../HeroComponent'
import { ReminderComponent } from '../ReminderComponent'
import { TransactionComponent } from '../TransactionComponent'

export const MainComponent = () => {
    return (
        <Main>
            <HeroComponent />
            <TransactionComponent />
            <ReminderComponent />
        </Main>
    )
}
