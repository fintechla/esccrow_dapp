import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.reminderBackground};
  border-radius: 10px;
  color: ${props => props.theme.reminderColor};
  margin: 10px;
  font-family: 'suisse', sans-serif;
`

export const Title = styled.h1`
  padding:1rem 0 1rem 2rem;
`

export const List = styled.ul`
  list-style-type: disc;
  padding:0 0 2rem 4rem;
`
export const ListItem = styled.li`
`

export const Small = styled.h2`
  font-size:1.2rem;
`