import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Loader from './../Shared/Loader';
import auth from './../firebase.init';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            toast.success('Account created!');
            navigate('/');
        }
        if (loading) {
            <Loader />
        }
        if (error) {
            toast.error(error.message)
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

                <label htmlFor='email'>Email</label>
                <input type="email" name='email' placeholder='Your email' className='input input-bordered w-full' />

                <label htmlFor='email'>Password</label>
                <input type="password" name='password' placeholder='Your password' className='input input-bordered w-full' />
                {error && <p className='text-error'>{error.message}</p>}
                <p>Have an account? <Link className='text-primary' to='/login'>Login here</Link></p>
                <input type="submit" className='btn btn-primary' value="Sign Up" />
            </form>
        </div>
    );
};

export default Signup;