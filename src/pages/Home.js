import React, { useEffect, useState } from 'react'
import { useAuth, useAuthUpdate } from '../contexts/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

import ProfilePicture from '../components/ProfilePicture'

function Home() {
    const authContext = useAuth()
    const authContextUpdate = useAuthUpdate()
    const navigate = useNavigate()
    const [checking, setChecking] = useState(true)

    useEffect(() => {
        if (!authContext.status) {
            navigate("/login")
        }
        setChecking(false)
    }, [authContext, navigate])

    const logout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
        authContextUpdate({ "status": false, "username": null })
    }

    return (
        <>
            {(checking) ? <></> : <>
                <title>Home</title>
                <h1>Hi, {authContext.username}</h1>
                <ProfilePicture/>
                <Link to='/login'>Sign in</Link>
                <Link to='/signup'>Sign up</Link>
                <button onClick={logout}>Logout</button>
            </>
            }
        </>
    )
}

export default Home
