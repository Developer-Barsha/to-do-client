import React from 'react';
import {toast} from 'react-toastify';

const Task = ({ task }) => {
    const {name, description, _id} = task;

    const handleTextDecor = id => {
        fetch(`https://todo-app-barsha.herokuapp.com/tasks/${id}`, {
            method: 'PUT',
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.upsertedId){
                toast.success('Congrats on completing!')
            }
        })
    };
    
    const handleDelete=(id)=>{
        fetch(`https://todo-app-barsha.herokuapp.com/tasks/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedId){
                toast.success('Task have been deleted!')
            }
        })
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className={task?.complete ? "text-decoration-line-through text-primary font-bold text-2xl" : "text-primary font-bold text-2xl"}>{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end flex">
                    <button onClick={()=>handleTextDecor(_id)} className="btn btn-success">Complete</button>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;