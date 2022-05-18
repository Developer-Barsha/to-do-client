import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Task from './Task';

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/tasks/${user.email}`)
            .then(res => res.json())
            .then(data =>{
                setTasks(data);
            })
    }, [tasks, user]);

    return (
        <section>
            <h1 className='text-2xl font-bold text-primary pt-5 pb-3'>Your Tasks</h1>
            <div className='grid lg:grid-cols-3 mg:grid-cols-2 grid-cols-1 gap-3 px-4'>
            { tasks.length>0 && tasks.map(task=><Task key={task._id} task={task}></Task>)}
        </div>
        </section>
    );
};

export default Tasks;