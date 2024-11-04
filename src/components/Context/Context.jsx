"use client"
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function ContextProvider({ children }) {
    const [PageLanguage, setPageLanguage] = useState("en") // Язык по умолчанию

    const ContextValue = {
        PageLanguage,
        setPageLanguage
    }

    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}