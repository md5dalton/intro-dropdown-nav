import React, { createContext, useState } from "react";

const SideDrawerContext = createContext()

export function SideDrawerProvider ({ children }) {

    const [ isOpen, setIsOpen ] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <SideDrawerContext.Provider value={{ isOpen, toggle }}>
            {children}
        </SideDrawerContext.Provider>
    )
} 

export default SideDrawerContext