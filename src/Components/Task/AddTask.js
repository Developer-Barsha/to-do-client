import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddTask = () => {
    const [user] = useAuthState(auth);

    const handleAddTask = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const task = { name, email : user.email, description };
        fetch('https://todo-app-barsha.herokuapp.com/tasks', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(task)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast.success(`Your new Task ${name} is added`);
                e.target.reset();
            }
        })
    }
    return (
        <div className='my-4'>
            <form onSubmit={handleAddTask} className='p-2 flex flex-col gap-3 lg:w-1/2 w-full mx-auto'>
                <h1 className="text-3xl text-primary font-bold pb-2 pt-6">Add a New task</h1>
                <input type="text" name='name' placeholder='Task Name' className='input input-bordered w-full'/>
                <input type="text" name='description' placeholder='Task Description' className='input input-bordered w-full'/>
                <input type="submit" className='btn btn-primary' value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;