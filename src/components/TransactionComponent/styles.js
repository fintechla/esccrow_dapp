import styled from 'styled-components'

export const Container = styled.div`
  width: 740px;
  margin: 0 auto;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
  background-color: ${props => props.theme.formBackground};
  font-family: 'suisse', sans-serif;
  color: ${props => props.theme.ColorNear};
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
  justify-content: space-between;
  padding:1rem 2rem;
  gap:10px;
`

export const ActionAddress = styled.section`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.floorColor};
`

export const ActionSend = styled.section`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.floorColor};
`

export const CallTransactionButton = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`

export const TransactionButton = styled.button`
  background-color: ${props => props.theme.transactionButtonColor};
  color: white;
  padding:1rem 2rem ;
  border-radius: 10px;
  font-family: 'suisse', sans-serif;
  border: none;
`

