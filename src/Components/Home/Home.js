import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen bg-white px-4">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <img src="https://media.istockphoto.com/vectors/businesswoman-checklist-successful-woman-checking-task-success-vector-id1136652082?k=20&m=1136652082&s=612x612&w=0&h=2mPuwBMV5eMKkJnqDYoH6Vq7uhBtJmvzUFJ1bkWrkCk=" className="lg:w-1/2 w-full rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Manage Tasks Easily!</h1>
                    <p className="py-6">Add your task and delete whenever you complete it. A very helpful task tracking app for you to manage your tasks easily at anywhere any time.</p>
                    <button onClick={()=>navigate('/login')} className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;