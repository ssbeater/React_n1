import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({task, complete, remove}) => {

    useEffect(() => {
        console.log('Task created')
        return () => {
            console.log(`Task ${task.name} is going to unmount`)
        }
    }, [task]);

    const taskLevelBadge = () => {
        switch (task.level) {
            case LEVELS.NORMAL:
                return (<h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.URGENT:
                return (<h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)
            case LEVELS.BLOCKING:
                return (<h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
            default:
                break;
        }
    }

    const taskCompletedIcon = () => task.completed 
        ? (<i onClick={()=>complete(task)} className='bi-toggle-on task-action' style={{color: 'green', fontSize: '1.2rem'}}></i>) 
        : (<i onClick={()=>complete(task)} className='bi-toggle-off task-action' style={{color: 'grey', fontSize: '1.2rem'}}></i>) 
        

    return (
        <tr className={task.completed ? 'fw-normal task-completed':'fw-normal task-pending'}>
            <th className='align-middle'>
                <span className='m-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='m-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                <span className='m-2'>
                    {taskCompletedIcon()}
                </span>
                <span className='m-2'>
                    <i onClick={()=>remove(task)} className='bi-trash task-action' style={{color: 'tomato', fontSize: '1.2rem'}}></i>
                </span>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default TaskComponent;
