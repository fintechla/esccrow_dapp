import 'regenerator-runtime/runtime'

import React, { useContext } from 'react'
import { login, logout } from '../../utils'

import getConfig from '../../config'
import logo from '../../assets/logo.svg'
import nearLogo from '../../assets/nearLogo.svg'
import connectWallet from '../../assets/connectWallet.svg'

import darkMode from '../../assets/darkMode.svg'
import { ThemeProviderContext } from '../../contexts/ThemeContext'

import { NavBarComponent } from '../../components/NavBarComponent'
import { FooterComponent } from '../../components/FooterComponent'
import { HeroComponent } from '../../components/HeroComponent'
import { ReminderComponent } from '../../components/ReminderComponent'
import { TransactionComponent } from '../../components/TransactionComponent'

import { Container, Main, Hero, Card, Info, Title, Small } from './styles'

export function Landing() {
    const { themeToggler } = useContext(ThemeProviderContext)
    if (!window.walletConnection.isSignedIn()) {
        return (
            <Container>
                <NavBarComponent actionButton={login} logo={logo} nearLogo={nearLogo} connectWallet={connectWallet} darkMode={darkMode} themeToggler={themeToggler} />
                <Main>
                    <HeroComponent />
                    <TransactionComponent />
                    <ReminderComponent />
                </Main>
                <FooterComponent />
            </Container>
        )
    }
    return (
        <Container>
            <NavBarComponent actionButton={logout} logo={logo} nearLogo={nearLogo} connectWallet={connectWallet} darkMode={darkMode} />
            <Main>
                <Hero>
                    <Title>Easiest, safest and most decentralized <br></br> way to buy and sells NFTs </Title>
                    <Small>The best way to send and receive NFT with Escrow <br></br>Protection</Small>
                </Hero>
                <Card>card</Card>
                <Info>reminder</Info>
            </Main>
            <FooterComponent />
        </Container>
    )
}
