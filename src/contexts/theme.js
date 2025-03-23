
//remember to change the tailwing config for dark mode

import { createContext, useContext } from "react"


//in mini context we didn't give any value in useCntext() but now we are passing default value but with a different syntax so take a look
//matlab you can give initial values for this context matlab when context is created it these values are already feeded
export const ThemeContext = createContext({
    themeMode: "light",// variables
    darkTheme: () => {},//methods
    lightTheme: () => {},// you can give variables as well as methods
})

export const ThemeProvider = ThemeContext.Provider

// Custom hook to make it easy to import we dont have to import usecontext and usercontext both
// we'll just import usetheme
export default function useTheme(){
    return useContext(ThemeContext)
}