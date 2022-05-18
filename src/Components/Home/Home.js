import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="hero min-h-screen bg-base-200 px-4">
            <div className="hero-content flex-col lg:flex-row gap-5">
                <img src="https://media.istockphoto.com/vectors/businesswoman-checklist-successful-woman-checking-task-success-vector-id1136652082?k=20&m=1136652082&s=612x612&w=0&h=2mPuwBMV5eMKkJnqDYoH6Vq7uhBtJmvzUFJ1bkWrkCk=" className="lg:w-1/2 w-full rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Manage Tasks Easily!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button onClick={()=>navigate('/login')} className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;