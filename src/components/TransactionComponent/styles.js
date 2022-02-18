import styled from 'styled-components'

export const Container = styled.div`
  width: 740px;
  margin: 0 auto;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.28);
  border-radius: 10px;
  background-color: ${props => props.theme.formBackground};
  font-family: "suisse";
  color: ${props => props.theme.ColorNear};
`

export const UserType = styled.section`
  display: flex;
  gap:10px;
  border-bottom: 1px solid ${props => props.theme.floorColor};
`
export const WrapperUserType = styled.div`
  padding:2rem 0 0 6.5rem;
`

export const UserTypeAction = styled.h1`
  border-bottom: 5px solid rgba(255,255,255,.1);
  padding:0 0 1rem 0;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 1.5rem;
  &:hover{
    font-weight: bold;
    cursor: pointer;
    border-bottom: 5px solid ${props => props.theme.floorColor};
  }
`
export const WrapperAction = styled.section`
  padding:2rem 6.5rem;
`
export const CallToAction = styled.section`
  display: flex;
  gap:10px;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const ActionAddress = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:10px;
  border-bottom: 1px solid ${props => props.theme.floorColor};
`
export const InputAction = styled.input`
  font-family: "suisse";
  border:none;
`
export const LabelAction = styled.label`
  font-family: "suisse";
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.5rem;
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
  font-family: "suisse" !important;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.5rem;
  border: none;
`

