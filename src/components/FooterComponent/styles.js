import styled from 'styled-components'

export const FooterContainer = styled.footer`
  box-shadow: ${props => props.theme.shadowColor};
  display: flex;
  font-family: 'suisseThin;', sans-serif;
  padding: 1rem 0;
  color: ${props => props.theme.footerColor};
`
export const Footer = styled.footer`
  width:80%;
  display: flex;
  margin:auto;
  justify-content:space-between;
  align-items: center;
`
export const Conditions = styled.div`
  width: 80%;
  display: flex;
  justify-content:end;
  align-items:center;
  gap:20px;
  `
