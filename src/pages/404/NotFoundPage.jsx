import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
    const location = useLocation()
    const navigate = useNavigate()

    console.log(location, navigate)

    const navigation = (path) => {
        navigate(path)
    }
    
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            Not Found Page
            <div>
                <button onClick={() => navigation('/')}>Go to Home</button>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
}

export default NotFoundPage;
