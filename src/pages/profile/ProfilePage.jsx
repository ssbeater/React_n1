import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const ProfilePage = ({user}) => {
    const location = useLocation()
    const navigate = useNavigate()

    const {state} = location

    console.log(state)

    const navigation = (path) => {
        navigate(path)
    }
    
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Your Profile</h1>
            <div>
                <button onClick={goBack}>Go Back</button>
                <button onClick={() => navigate('/tasks')}>Your Tasks</button>
                <h3>{state.online ? 'online':'offline'}</h3>
            </div>
        </div>
    );
}

export default ProfilePage;
