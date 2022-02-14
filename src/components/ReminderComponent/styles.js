import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.reminderBackground};
  border-radius: 10px;
  padding:1rem 0 1rem 2rem;
  color: ${props => props.theme.reminderColor};
  margin: 2rem;
`

export const Title = styled.h1`
`

export const List = styled.ul`
  list-style-type: disc;
  padding:2rem ;
`
export const Small = styled.h2`
  font-size:1.2rem;
`