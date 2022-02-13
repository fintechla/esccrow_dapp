import styled from 'styled-components'

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