import React from 'react';
import { useNavigate } from 'react-router-dom';

import LoginFormik from '../../components/pure/forms/loginFormik'

import { Button } from '@mui/material'

const LoginPage = () => {

    const navigate = useNavigate()

    const navigateToRegister = () => {
        navigate('/newAccount')
    }

    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormik></LoginFormik>
            <Button onClick={navigateToRegister}>Register New User</Button>
        </div>
    );
}

export default LoginPage;
