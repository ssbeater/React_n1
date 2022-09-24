import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation()
    const navigate = useNavigate()

    console.log(location, navigate)

    const navigation = (path) => {
        navigate(path)
    }
    
    const goBack = () => {
        navigate(-1)
    }

    const goForward = () => {
        navigate(1)
    }

    return (
        <div>
            <h1>About | FAQs</h1>
            <div>
                <button onClick={() => navigation('/')}>Go to Home</button>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goForward}>Go Forward</button>
            </div>
        </div>
    );
}

export default AboutPage;
