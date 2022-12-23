import React, {useContext, useState} from "react"

const darkContext = React.createContext()
const updateDarkContext = React.createContext()

export function useDark(){
    useContext(darkContext)
}

export function useUpdateDark(){
    useContext(updateDarkContext)
}

export function ThemeProvider({children}) {
    const [dark, setDark] = useState(true)
    
    function toggleTheme(){
        setDark(prevDark => !prevDark)
    }

    return(
        <darkContext.Provider value={dark}>
            <updateDarkContext.Provider value={toggleTheme}>
                {children}
            </updateDarkContext.Provider>
        </darkContext.Provider>
    )
}