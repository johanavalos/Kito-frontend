import React, { useState, createContext, useContext, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

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

    const [decoding, setDecoding] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                const currentTime = Date.now() / 1000; // Current time in seconds
                if (decoded.exp > currentTime) {
                    setAuth({"status": true, "username": decoded.sub})
                } else {
                    console.log("TOKEN EXPIRED")
                }
            } catch (error) {
                console.error('Invalid token:', error);
            }
        } else {
            console.log('No token found in localStorage');
        }
        setDecoding(false)

    }, [])


    return <AuthContext.Provider value={auth}>
        <AuthUpdateContext value={setAuth}>
            {!decoding? children: <></>}
        </AuthUpdateContext>
    </AuthContext.Provider>
}