import React from 'react'

import { Formik, Form, Field, ErrorMessage } from "formik";

import AuthLayout from '../layouts/AuthLayout';

import signupSchema from '../schemas/signupSchema';

function Signup() {
    const initialValues = {
        username: "",
        password: "",
        confirmPassword: ""
    }
    const signup = () => {

    }
    return (
        <AuthLayout>
            <h1 className='form-title'>Create new account</h1>
            <Formik initialValues={initialValues} onSubmit={signup} validationSchema={signupSchema}>
                <Form className="form-container">
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
                    <button type='submit'>Sign up</button>
                </Form>
            </Formik>
            <a href='/login'>Already have an account? Sign in</a>
        </AuthLayout>
    )
}

export default Signup
