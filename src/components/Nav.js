import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
    <div className='nav'>
        <div className='nav-items'>
        <Link className='nav-item' to='/'>
            HOME
        </Link>
        <Link className='nav-item' to='/about'>
            ABOUT
        </Link>
        <Link className='nav-item' to='/dinners'>
            DINNERS
        </Link>
        <Link className='nav-item' to='/planner'>
            PLANNER
        </Link>
        </div>
    </div>
);

export default Nav;