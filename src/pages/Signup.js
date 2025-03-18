import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

import { useAuth, useAuthUpdate } from '../contexts/AuthContext';
import { apiUrl } from '../config/urls';

import AuthLayout from '../layouts/AuthLayout';

import signupSchema from '../schemas/signupSchema';

function Signup() {

    const navigate = useNavigate();

    const authContext = useAuth()
    const setAuthContext = useAuthUpdate()

    const initialValues = {
        username: "",
        password: "",
        confirmPassword: ""
    }

    useEffect(() => {
        if (authContext.status) {
            navigate("/", {"replace": true})
        }
    }, [authContext, navigate])


    const signup = (data) => {
        console.log("WAOS")
        axios.post(`${apiUrl}/auth/signup`, data)
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
            <title>Sign up</title>
            <h1 className='form-title'>Create new account</h1>
            <Formik initialValues={initialValues} onSubmit={signup} validationSchema={signupSchema}>

                {({ isValid }) => (<Form className="form-container">
                    <div className='field'>
                        <Field id="username" name="username" placeholder="Username" />
                        <ErrorMessage className='error' name='username' component="span" />
                    </div>
                    <div className='field'>
                        <Field id="password" name="password" placeholder="Password" type="password" />
                        <ErrorMessage className='error' name='password' component="span" />
                    </div>
                    <div className='field'>
                        <Field id="confirm-password" name="confirmPassword" placeholder="Confirm password" type="password" />
                        <ErrorMessage className='error' name='confirmPassword' component="span" />
                    </div>
                    <button type='submit' disabled={!isValid}>Sign up</button>
                </Form>)}
            </Formik>
            <a href='/login'>Already have an account? Sign in</a>
        </AuthLayout>
    )
}

export default Signup
