import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
  margin: 2rem;
  background-color: ${props => props.theme.formBackground};
`

export const UserType = styled.section`
  display: flex;
  gap:10px;
  border-bottom: 1px solid ${props => props.theme.floorColor};
`

export const UserTypeAction = styled.h1`
  padding:1rem 0 1rem 2rem;
`

export const CallToAction = styled.section`
  display: flex;
  padding:1rem 0 1rem 2rem;
  gap:10px;
`

export const ActionAddress = styled.section`
  width: 30%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.floorColor};
`

export const ActionSend = styled.section`
  width: 30%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.floorColor};
`



