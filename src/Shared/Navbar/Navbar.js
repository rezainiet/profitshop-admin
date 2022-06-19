import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
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
        {
            user && <button className='btn btn-ghost text-secondary' onClick={handleLogout}>Logout</button>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Admin Dashboard</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;