import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div class="navbar bg-blue-500">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold text-2xl">
                        <li className='list-size'><Link to='/'>Calender</Link></li>
                        <li><Link to='/todo'>To-Do</Link></li>
                        <li><Link to='/completed-task'>Completed Tasks</Link></li>
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-2xl text-white navHeader">Todo List</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-xl text-white ">
                    <li><Link to='/'>Calender</Link></li>
                    <li><Link to='/todo'>To-Do</Link></li>
                    <li><Link to='/completed-task'>Completed Tasks</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class=""></a>
            </div>
        </div>
    );
};

export default Header;