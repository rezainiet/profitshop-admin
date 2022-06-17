import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../firebase.init';
import CustomLink from './CustomLink/CustomLink';

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
        <button className='btn btn-ghost text-secondary' onClick={handleLogout}>Logout</button>
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar bg-base-300">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Admin Dashboard</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* <!-- Navbar menu content here --> */}
                            {navLinks}
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                here is the Content container
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {/* <!-- Sidebar content here --> */}
                    {navLinks}

                </ul>

            </div>
        </div>
    );
};

export default Navbar;