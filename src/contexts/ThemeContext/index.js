import React, { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme,GlobalStyles } from './themes.js'

export const ThemeProviderContext = createContext(null)

export const ThemeContext = (props) => {
    const [theme, setTheme] = useState("light")
    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light")
    }
    return (
        <ThemeProviderContext.Provider value={{ themeToggler: themeToggler }}>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                {props.children}
            </ThemeProvider>
        </ThemeProviderContext.Provider>
    )
}
