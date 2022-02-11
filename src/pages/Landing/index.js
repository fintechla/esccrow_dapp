import 'regenerator-runtime/runtime'

import React from 'react'
import { login, logout } from '../../utils'

import getConfig from '../../config'
import logo from '../../assets/logo.svg'
import nearLogo from '../../assets/nearLogo.svg'
import connectWallet from '../../assets/connectWallet.svg'
import darkMode from '../../assets/darkMode.svg'


const { networkId } = getConfig(process.env.NODE_ENV || 'development')

import { Container, Main, ContainerNavBar, NavBar, Logo, MenuNav, MenuNear, Hero, Card, Info, FooterContainer, Footer, Title, Small, Conditions } from './styles'

export function Landing() {
    // use React Hooks to store greeting in component state
    const [greeting, setGreeting] = React.useState()

    // when the user has not yet interacted with the form, disable the button
    const [buttonDisabled, setButtonDisabled] = React.useState(true)

    // after submitting the form, we want to show Notification
    const [showNotification, setShowNotification] = React.useState(false)

    // The useEffect hook can be used to fire side-effects during render
    // Learn more: https://reactjs.org/docs/hooks-intro.html
    React.useEffect(
        () => {
            // in this case, we only care to query the contract when signed in
            if (window.walletConnection.isSignedIn()) {

                // window.contract is set by initContract in index.js
                window.contract.getGreeting({ accountId: window.accountId })
                    .then(greetingFromContract => {
                        setGreeting(greetingFromContract)
                    })
            }
        },

        // The second argument to useEffect tells React when to re-run the effect
        // Use an empty array to specify "only run on first render"
        // This works because signing into NEAR Wallet reloads the page
        []
    )

    // if not signed in, return early with sign-in prompt
    if (!window.walletConnection.isSignedIn()) {
        return (
            <Container>
                <ContainerNavBar>
                    <NavBar>
                        <Logo>
                            <img src={logo} />
                        </Logo>
                        <MenuNav>
                            <div>Home</div>
                            <div>About</div>
                            <div>Community</div>
                            <div>Support</div>
                        </MenuNav>
                        <MenuNear>
                            <div><img src={nearLogo} /></div>
                            <div><img src={connectWallet} onClick={login} /></div>
                            <div><img src={darkMode} /></div>
                        </MenuNear>
                    </NavBar>
                </ContainerNavBar>
                <Main>
                    <Hero>
                        <Title>Easiest, safest and most decentralized <br></br> way to buy and sells NFTs </Title>
                        <Small>The best way to send and receive NFT with Escrow <br></br>Protection</Small>
                    </Hero>
                    <Card>card</Card>
                    <Info>reminder</Info>
                </Main>
                <FooterContainer>
                    <Footer>
                        <p>&copy; 2022 FintechLab LLC</p>
                        <Conditions>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </Conditions>
                    </Footer>
                </FooterContainer>

            </Container>
        )
    }
    return (
        // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
        <>
            <Container>
                <NavBar>
                    <Logo>
                        <img src={logo} />
                    </Logo>
                    <MenuNav>
                        <div>Home</div>
                        <div>About</div>
                        <div>Community</div>
                        <div>Support</div>
                    </MenuNav>
                    <MenuNear>
                        <div>Near</div>
                        <div><button onClick={logout}>
                            Sign out
                        </button></div>
                        <div>Night Mode</div>
                    </MenuNear>
                </NavBar>
                <Hero>hero</Hero>
                <Card>card</Card>
                <Info>reminder</Info>
                <Footer>footer</Footer>
            </Container>

        </>
    )
}
