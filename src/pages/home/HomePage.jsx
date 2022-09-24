import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const HomePage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location)

    const navigation = (path) => {
        navigate(path,
            { state: {online: true} }
        )
    }
    
    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate(1)
    }

    return (
        <div>
            <h1>HOME</h1>
            <div>
                <button onClick={() => navigation('/profile')}>Go to Profile</button>
            </div>
        </div>
    );
}

export default HomePage;
