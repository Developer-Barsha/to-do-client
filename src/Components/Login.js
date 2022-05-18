import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, useLocation, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loader from '../Shared/Loader';

const Login = () => {
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    useEffect(() => {
        if (user) {
            toast.success('Logged In!')
            navigate(from, { replace: true });
        }
        if (loading) {
            <Loader />
        }
        if (error) {
            toast.error(error.message)
        }
    }, [user, loading, navigate, from])

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='my-4'>
            <form onSubmit={handleLogin} className='p-2 flex flex-col gap-3 lg:w-1/2 w-full mx-auto'>
                <h1 className="text-3xl text-primary font-bold pb-2 pt-4">Please Login</h1>
                
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' placeholder='Your email' className='input input-bordered w-full' />

                <label htmlFor='email'>Password</label>
                <input type="password" name='password' placeholder='Your password' className='input input-bordered w-full' />
                {error && <p className='text-error'>{error.message}</p>}
                <p>Don't have an account? <Link className='text-primary' to='/signup'>Register here</Link></p>
                <input type="submit" className='btn btn-primary' value="Log In" />
            </form>
        </div>
    );
};

export default Login;