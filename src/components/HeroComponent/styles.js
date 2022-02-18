import styled from 'styled-components'

export const Hero = styled.section`
  font-family: "suisse";
  display: grid;
  gap:1rem;
  text-align: center;
`
export const Title = styled.h1`
  font-size:2.5rem;
  color: ${props => props.theme.reminderColor};
  font-family: "suisse";
  font-style: normal;
  font-weight: bold;
  line-height: 45px;
`
export const Small = styled.h2`
  font-family: "suisse";
  font-style: normal;
  line-height: 28px;
  font-weight: 450;
  font-size:1.2rem;
  color: ${props => props.theme.footerColor}
`