import styled from 'styled-components'

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
  color: ${props => props.theme.reminderColor};
`
export const Small = styled.h2`
  font-family: 'suisse', sans-serif;
  font-size:1.2rem;
  color: ${props => props.theme.reminderColor}
`