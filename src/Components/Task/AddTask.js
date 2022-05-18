import React from 'react';

const AddTask = () => {
    const handleAddTask = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const task = { name, description };
        console.log(task);
        fetch('http://localhost:5000/tasks', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(task)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className='my-4'>
            <form onSubmit={handleAddTask} className='p-2 flex flex-col gap-3 lg:w-1/2 w-full mx-auto'>
                <input type="text" name='name' placeholder='Task Name' className='input input-bordered w-full'/>
                <input type="text" name='description' placeholder='Task Description' className='input input-bordered w-full'/>
                <input type="submit" className='btn btn-primary' value="Add Task" />
            </form>
        </div>
    );
};

export default AddTask;