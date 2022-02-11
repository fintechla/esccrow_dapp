import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows:13% auto 8%;
`;

export const ContainerNavBar = styled.nav`
  box-shadow: 0px 1px 6px #CCCCCC;
  display: grid;
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

export const Main = styled.main`
  justify-self:center;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  padding:2rem;
`

export const Hero = styled.section`
  padding:1rem;
  justify-self:center;
  font-family: 'Exo', sans-serif;
  text-align:center;
  display: grid;
  gap:10px;
`
export const Title = styled.h1`
  font-size:2.5rem;
  color: #1A237E;
`
export const Small = styled.h2`
  font-size:1.2rem;
  `

export const Card = styled.section`
justify-self:center;

`

export const Info = styled.section`
justify-self:center;
`

export const FooterContainer = styled.footer`
  box-shadow: 0px 1px 6px #CCCCCC;
  display: grid;
`
export const Footer = styled.footer`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content:space-around;
  align-items:center;
`
export const Conditions = styled.div`
  width: 80%;
  display: flex;
  justify-content:end;
  align-items:center;
  gap:20px;
  `
