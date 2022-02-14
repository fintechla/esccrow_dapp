import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: "rgba(255,255,255,1)",
    color: "rgba(0,0,0,1)",
    formBackground:"rgba(255,255,255,1)",
    reminderBackground:"#E8F4FF",
    reminderColor:"#1A237E",
    floorColor:"#1A237E",
}
export const darkTheme = {
    body: "linear-gradient(180deg, #1A237E 7.2%, #000000 80.73%, #000000 98.73%)",
    color: "rgba(255,255,255,1)",
    formBackground:"#1A237E",
    reminderBackground:"#1A77FF40",
    reminderColor:"rgba(255,255,255,1)",
    floorColor:"rgba(255, 255, 255, 0.4)"
}


export const GlobalStyles = createGlobalStyle`
    body{
        background:${props => props.theme.body};
        color:${props => props.theme.color};
    }
`