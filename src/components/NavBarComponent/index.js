import React from 'react'

import { ContainerNavBar, NavBar, Logo, MenuNav, MenuNear } from './styles'

export const NavBarComponent = ({actionButton,logo,nearLogo,connectWallet,darkMode,themeToggler}) => {
    return (
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
                    <div><img src={connectWallet} onClick={actionButton} /></div>
                    <div><img src={darkMode} onClick={()=>{themeToggler()}}/></div>
                </MenuNear>
            </NavBar>
        </ContainerNavBar>
    )
}
