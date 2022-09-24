import React from 'react';
import { useNavigate } from 'react-router-dom';

import RegisterForm from '../../components/pure/forms/registerForm';

import { Button } from '@mui/material'

const RegisterPage = () => {

    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/login')
    }

    return (
        <div>
            <h1>Register Page</h1>
            <RegisterForm></RegisterForm>
            <Button onClick={navigateToLogin}>Log In</Button>
        </div>
    );
}

export default RegisterPage;
