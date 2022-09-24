import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
    email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
    password: Yup.string()
                .required('Password is required')
})

const LoginFormik = () => {

    const navigate = useNavigate()
    const initialCredentials = {
        email: '',
        password: ''
    }
    const submitLogin = async (values) => {
        await new Promise((r) => setTimeout(r,1000)) 
        alert(JSON.stringify(values, null, 2))
        await localStorage.setItem('credentials', JSON.stringify(values, null, 2))
        navigate('/profile')
    }

    return (
        <div>
            <h4>Login Formik</h4>
            <Formik
                // *** Initial Values ***
                initialValues={initialCredentials}
                // *** Yup Validation Schema ***
                validationSchema={loginSchema}
                // *** onSubmit Function ***
                onSubmit={submitLogin}
            >
                { ({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                        <Form>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <Field id='email' name='email' placeholder='Email' type='email'/>
                                <ErrorMessage name='email'/>
                            </div>

                            <div>
                                <label htmlFor='password'>Password</label>
                                <Field id='password' name='password' placeholder='Password' type='password'/>
                                <ErrorMessage name='password'/>
                            </div>

                            <div>
                                <button type='submit'>Login</button>
                                {isSubmitting ? <p>Login your Credentials...</p>:null}
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default LoginFormik;
