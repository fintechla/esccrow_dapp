import React from 'react'

import { ContainerNavBar, NavBar, Logo, LogoTitle, NearLogoContainer, NearTitle, WalletLogoContainer, WalletTitle, MenuNav, MenuNear,DarkModeContainer } from './styles'

export const NavBarComponent = ({ actionButton, logo, nearLogo, connectWallet, darkMode, themeToggler }) => {
    return (
        <ContainerNavBar>
            <NavBar>
                <Logo>
                    <img src={logo} />
                    <LogoTitle>ESCCROW</LogoTitle>
                </Logo>
                <MenuNav>
                    <div>Home</div>
                    <div>About</div>
                    <div>Community</div>
                    <div>Support</div>
                </MenuNav>
                <MenuNear>
                    <NearLogoContainer>
                        <img src={nearLogo} />
                        <NearTitle>NEAR</NearTitle>
                    </NearLogoContainer>
                    <WalletLogoContainer onClick={actionButton}>
                        <img src={connectWallet} />
                        <WalletTitle>Connect Wallet</WalletTitle>
                    </WalletLogoContainer>
                    <DarkModeContainer onClick={() => { themeToggler() }}>
                        <img src={darkMode}  />
                    </DarkModeContainer>
                </MenuNear>
            </NavBar>
        </ContainerNavBar>
    )
}
