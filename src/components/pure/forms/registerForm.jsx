import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { ROLES } from '../../../models/role.enum';

const RegisterForm = () => {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }

    const registrationSchema = Yup.object().shape({
        username: Yup.string()
                    .min(6,'Username too short')
                    .max(12,'Username too long')
                    .required('User Name is required'),
        email: Yup.string()
                    .email('Invalid email format')
                    .required('Email is required'),
        password: Yup.string()
                    .required('Password is required')
                    .min(8,'Password too short'),
        confirm: Yup.string()
                    .required('You must confirm the password')
                    .when('password',{
                        is: value => (value && value.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref('password')],
                            'Passwords must match!'
                        )
                    }),
        role: Yup.string()
                    .oneOf([ROLES.USER, ROLES.ADMIN],'You must select a Role')
                    .required('Role is required'),
    })

    const submit = async (values) => {
        await new Promise((r) => setTimeout(r,1000)) 
        alert(JSON.stringify(values, null, 2))
        localStorage.setItem('credentials', JSON.stringify(values, null, 2))
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema={registrationSchema}
                onSubmit={submit}
            >
                { ({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur}) => (
                    <Form>
                        <div>
                            <label htmlFor='username'>Username</label>
                            <Field id='username' name='username' placeholder='user name'/>
                            {errors.username && touched.username && 
                                <ErrorMessage name='username' component='div'/>}
                        </div>

                        <div>
                            <label htmlFor='email'>Email</label>
                            <Field id='email' name='email' placeholder='Email' type='email'/>
                            {errors.email && touched.email && 
                                <ErrorMessage name='email' component='div'/>}
                        </div>

                        <div>
                            <label htmlFor='password'>Password</label>
                            <Field id='password' name='password' placeholder='password' type='password'/>
                            {errors.password && touched.password && 
                                <ErrorMessage name='password' component='div'/>}
                        </div>

                        <div>
                            <label htmlFor='confirm'>Confirm Password</label>
                            <Field id='confirm' name='confirm' placeholder='confirm password' type='password'/>
                            {errors.confirm && touched.confirm && 
                                <ErrorMessage name='confirm' component='div'/>}
                        </div>
                        
                        <div>
                            <button type='submit'>Register user</button>
                            {isSubmitting ? <p>Your User is being registered</p>:null}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default RegisterForm;
