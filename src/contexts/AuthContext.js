import React, { useState, createContext, useContext } from "react";

const AuthContext = createContext()
const AuthUpdateContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function useAuthUpdate() {
    return useContext(AuthUpdateContext)
}

export function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({ "status": false, "username": null })

    return <AuthContext.Provider value={auth}>
        <AuthUpdateContext value={setAuth}>
            {children}
        </AuthUpdateContext>
    </AuthContext.Provider>
}