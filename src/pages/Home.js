import React from 'react'
import { useAuth } from '../contexts/AuthContext'

function Home() {
    const authContext = useAuth()
    return (
        <>
            <h1>Hi, {authContext.username}</h1>
            <a href='/login'>Sign in</a>
            <a href='/signup'>Sign up</a>
        </>
    )
}

export default Home
