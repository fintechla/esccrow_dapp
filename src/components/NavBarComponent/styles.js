import styled from 'styled-components'

export const ContainerNavBar = styled.nav`
  box-shadow: ${props => props.theme.shadowColor};
  display: grid;
  font-family: 'suisse', sans-serif;
`

export const NavBar = styled.nav`
  display: grid;
  width:80%;
  margin:auto;
  grid-template-columns: auto auto auto;
  grid-template-rows: 1fr;
`
export const Logo = styled.section`
  display: flex;
  align-items:center;
  gap:1rem;
`
export const LogoTitle = styled.section`
  font-size:2.5rem;
  color: ${props => props.theme.color};
`

export const MenuNav = styled.section`
  display: flex;
  justify-content:center;
  align-items:center;
  gap:2rem;
  font-family: 'Exo', sans-serif;
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
