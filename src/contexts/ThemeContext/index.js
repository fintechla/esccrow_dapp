import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme,GlobalStyles } from './themes.js'

import darkIcon from '../../assets/darkMode.svg'
import sunIcon from '../../assets/sunIcon.svg'

export const ThemeProviderContext = createContext(null)

export const ThemeContext = (props) => {
    const [theme, setTheme] = useState("light")
    const [darkMode,setDarkMode] = useState(true)
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
        darkMode === true ? setDarkMode(false) : setDarkMode(true) 
    }
    return (
        <ThemeProviderContext.Provider value={{ themeToggler: themeToggler,Icon:darkMode === true ? darkIcon : sunIcon}}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                {props.children}
            </ThemeProvider>
        </ThemeProviderContext.Provider>
    )
}
