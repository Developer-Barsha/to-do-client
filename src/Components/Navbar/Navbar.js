import React from 'react';
import CustomLink from '../../Shared/CustomLink';

const Navbar = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-between', padding:'5px 80px'}}>
            <h3>To-Do App</h3>
            <nav>
                <ul style={{display:'flex', gap:'15px'}}>
                    <CustomLink to={'/'}>Home</CustomLink>
                    <CustomLink to={'/addTask'}>Home</CustomLink>
                    <CustomLink to={'/home'}>Home</CustomLink>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;