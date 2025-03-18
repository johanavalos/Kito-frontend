import React, { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import AuthLayout from '../layouts/AuthLayout'

import { useAuth, useAuthUpdate } from '../contexts/AuthContext';


import loginSchema from '../schemas/loginSchema'
import { apiUrl } from '../config/urls'

function Login() {

    const navigate = useNavigate();

    const authContext = useAuth()
    const setAuthContext = useAuthUpdate()

    const initialValues = {
        username: "",
        password: ""
    }

    useEffect(() => {
        if (authContext.status) {
            navigate("/")
        }
    }, [authContext, navigate])

    const login = (data) => {
        axios.post(`${apiUrl}/auth/login`, data)
            .then((response) => {
                console.log(response.data.accessToken);
                setAuthContext({ "username": response.data.username, "status": true })
                localStorage.setItem("accessToken", response.data.accessToken)
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    return (
        <AuthLayout>
            <title>Log in</title>
            <h1 className='form-title'>Log in</h1>
            <Formik initialValues={initialValues} onSubmit={login} validationSchema={loginSchema}>

                {({ isValid }) => (<Form className="form-container">
                    <div className='field'>
                        <Field id="username" name="username" placeholder="Username" />
                        <ErrorMessage className='error' name='username' component="span" />
                    </div>
                    <div className='field'>
                        <Field id="password" name="password" placeholder="Password" type="password" />
                        <ErrorMessage className='error' name='password' component="span" />
                    </div>
                    <button type='submit' disabled={!isValid}>Login</button>
                </Form>)}

            </Formik>
            <Link href='/signup'>Don't have an account yet? Sign up</Link>
        </AuthLayout>
    )
}

export default Login
