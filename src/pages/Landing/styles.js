import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns:1fr;
  grid-template-rows:auto 1fr auto;
`;

export const Main = styled.main`
  justify-self:center;
  width: 43%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  padding:2rem;
`