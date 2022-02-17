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
import { MainComponent } from '../../components/MainComponent'

import { Container, Main } from './styles'

export function Landing() {
    const { themeToggler,Icon } = useContext(ThemeProviderContext)
    if (!window.walletConnection.isSignedIn()) {
        return (
            <Container>
                <NavBarComponent actionButton={login} logo={logo} nearLogo={nearLogo} connectWallet={connectWallet} darkMode={Icon} themeToggler={themeToggler} />
                <MainComponent />
                <FooterComponent />
            </Container>
        )
    }
    return (
        <Container>
            <NavBarComponent actionButton={login} logo={logo} nearLogo={nearLogo} connectWallet={connectWallet} darkMode={darkMode} themeToggler={themeToggler} />
            <MainComponent />
            <FooterComponent />
        </Container>
    )
}
