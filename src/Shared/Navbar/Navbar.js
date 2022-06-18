import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const handleLogout = () => {
        signOut(auth);
    }
    const navLinks = <>
        <li><CustomLink to='/admin' >Home</CustomLink></li>
        <li><CustomLink to='/reviews' >Reviews</CustomLink></li>
        <li><CustomLink to='/blogs' >Blogs</CustomLink></li>
        <li><CustomLink to='/manage-withdraw' >Manage Withdrawal</CustomLink></li>
        <li><CustomLink to='/all-user' >All users</CustomLink></li>
        <li><CustomLink to='/packages' >Packages</CustomLink></li>
        <button className='btn btn-ghost text-secondary' onClick={handleLogout}>Logout</button>
    </>
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">Admin Dashboard</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;