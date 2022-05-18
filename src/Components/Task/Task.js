import React from 'react';

const Task = ({ task }) => {
    const {name, description, _id} = task;
    const handleDelete = id => {
        fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console(data))
    };

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleDelete(_id)} className="btn btn-red">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Task;