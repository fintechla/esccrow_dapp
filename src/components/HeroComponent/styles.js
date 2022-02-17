import styled from 'styled-components'

export const Hero = styled.section`
  font-family: 'suisse', sans-serif;
  display: grid;
  gap:1rem;
  text-align: center;
`
export const Title = styled.h1`
  font-size:2.5rem;
  color: ${props => props.theme.reminderColor};
`
export const Small = styled.h2`
  font-family: 'suisse', sans-serif;
  font-size:1.2rem;
  color: ${props => props.theme.footerColor}
`