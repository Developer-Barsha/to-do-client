import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loader from './../Shared/Loader';
import auth from './../firebase.init';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            toast.success('Account created!');
            return navigate('/');
        }
        if (loading) {
            return <Loader />
        }
    }, [user, loading, navigate])

    const handleSignup = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }



    return (
        <div className='my-4'>
            <form onSubmit={handleSignup} className='p-2 flex flex-col gap-3 lg:w-1/2 w-full mx-auto'>
                <h1 className="text-3xl text-primary font-bold pb-2 pt-4">Create Account</h1>
                <input type="email" name='email' placeholder='Your email' className='input input-bordered w-full' />
                <input type="password" name='password' placeholder='Your password' className='input input-bordered w-full' />
                {error && <p className='text-error'>{error}</p>}
                <input type="submit" className='btn btn-primary' value="Sign Up" />
            </form>
        </div>
    );
};

export default Signup;