import { useState } from "react";
import { createContext } from "react";

export const ModelContext = createContext({
    isOpen: false,
    setIsOpen : () => {
        
    }
})

export const ModelContextProvider = ({children}) => {
    const [isOpen,setIsOpen] = useState(false);
    
    const value = {
        isOpen,
        setIsOpen,
    }
    return(
        <ModelContext.Provider value={value}>
            {children}
        </ModelContext.Provider>
    )
}