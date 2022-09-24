import React from 'react';
import { useNavigate } from 'react-router-dom'

const TasksPage = () => {
    const navigate = useNavigate()

    const navigation = (path) => {
        navigate(path)
    }
    
    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h3>Your Tasks</h3>
            <div>
                <button onClick={() => navigation('/')}>Go to Home</button>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
}

export default TasksPage;
