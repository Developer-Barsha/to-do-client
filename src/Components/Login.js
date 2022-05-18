import React from 'react';

const Login = () => {
    const handleLogin=e=>{        
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }

    return (
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-5">
            <div class="card-body">
                <form onSubmit={()=>handleLogin()}>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" class="input input-bordered" />
                        {/* <label class="label">
                        <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                    </label> */}
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;