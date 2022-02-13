import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows:13% auto 8%;
`;

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
