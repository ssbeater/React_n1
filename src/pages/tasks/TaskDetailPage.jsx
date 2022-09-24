
import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const TaskDetailPage = ({tasks}) => {
    const location = useLocation()
    const navigate = useNavigate()

    const navigation = (path) => {
        navigate(path)
    }
    
    const goBack = () => {
        navigate(-1)
    }

    const {id} = useParams()
    const task = tasks[id-1]

    return (
        <div>
            <h3>Task Details - {id}</h3>
            <h2>{task.name}</h2>
            <h2>{task.description}</h2>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
        </div>
    );
}

export default TaskDetailPage;
