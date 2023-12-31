import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                   <li><ActiveLink to='/'>Home</ActiveLink></li>
                    <li><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
                    <li tabIndex={0}>
                        <ActiveLink to='/jobapply' className="justify-between">
                        Applied Jobs
                        </ActiveLink>
                        
                    </li>
                    <li>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                    </li>
                    
                </ul>
            </div>
           <div className='flex items-center justify-center gap-1'>
           <p class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black ">JOB HUNTER</p> <img src="https://cdn-icons-png.flaticon.com/512/53/53041.png?w=360" alt="" className=' w-14 h-12 md:block hidden' />
           </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2">
            <li><ActiveLink to='/'>Home</ActiveLink></li>
                <li><ActiveLink to='/statistics'>Statistics</ActiveLink></li>
                <li tabIndex={0}>
                    <ActiveLink to='/jobapply'>
                    Applied Jobs
                    </ActiveLink>
                </li>
                <li>
                    <ActiveLink to='/blogs'>Blogs</ActiveLink>
                </li>
                
            </ul>
        </div>
        <div className="navbar-end" >
            <Link  className="btn bg-gradient-to-r from-purple-500 to-purple-400 ...  border-none">Star Applying</Link>
        </div>
    </div>
    );
};

export default NavBar;