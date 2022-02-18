import styled from 'styled-components'

export const ContainerNavBar = styled.nav`
  box-shadow: ${props => props.theme.shadowColor};
  display: flex;
  font-family: 'suisseThin;', sans-serif;
  padding: 1rem 0;
`

export const NavBar = styled.nav`
  width:80%;
  display: flex;
  margin:auto;
  justify-content:space-between;
  align-items: center;
`

export const Logo = styled.section`
  display: flex;
  align-items: center;
  gap:1rem;
`
export const LogoTitle = styled.section`
  font-size:2.5rem;
  font-family:"lightFont" ;
  color: ${props => props.theme.ColorNear};
`

export const MenuNav = styled.section`
  display: flex;
  gap:8rem;
  align-items: center;
  color: ${props => props.theme.ColorNear};
  font-family: "suisse";
`
export const MenuItem = styled.section`
  font-style: normal;
  font-weight: 450;
`

export const MenuNear = styled.section`
  display: flex;
  justify-content:center;
  align-items:center;
  gap:2rem;
`

export const NearLogoContainer = styled.section`
  display: flex;
  gap:.5rem;
  place-items: center;
  padding: .5rem;
  background-color: ${props => props.theme.shadowColorNear};
  border-radius:10px;
`

export const NearTitle = styled.section`
  font-size:1rem;
  color: ${props => props.theme.reminderColor};
`

export const WalletLogoContainer = styled.a`
  cursor: pointer;
  display: flex;
  gap:.5rem;
  place-items: center;
  padding: .5rem;
  background-color: ${props => props.theme.shadowColorWallet};
  border-radius:10px;
  &:hover{
    background-color:rgba(0, 134, 255, .5);
  }
`

export const WalletTitle = styled.section`
  font-size:1rem;
  color: white;
  font-family: 'suisse', sans-serif;
`

export const DarkModeContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: .5rem;
  width: 3rem;
  height: 1.5rem;
  background-color: ${props => props.theme.shadowColorNear};
  border-radius:10px;
  &:hover{
    background-color:rgba(0, 134, 255, .5);
  }
`
