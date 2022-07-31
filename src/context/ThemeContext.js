import { createContext, useState } from 'react';

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {}
})

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = (theme) => {
        setTheme(theme);
    }
    return (
        <ThemeContext.Provider value={{theme:theme, toggleTheme:toggleTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;