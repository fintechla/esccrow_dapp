import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: "rgba(255,255,255,1)",
    color: "rgba(0,0,0,1)"
}
export const darkTheme = {
    body: "rgba(0,0,0,1)",
    color: "rgba(255,255,255,1)"
}


export const GlobalStyles = createGlobalStyle`
    body{
        background-color:${props => props.theme.body};
        color:${props => props.theme.color};
    }
`