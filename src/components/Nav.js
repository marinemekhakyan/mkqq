import React from 'react';
import { Link } from 'react-router-dom';


function handleClick() {
const navigation = document.querySelector('.navigation')
const navCheckbox = navigation.querySelector('.navigation__checkbox')
const navItems = navigation.querySelectorAll('.navigation__nav-items--link')
navItems.forEach(link =>
    link.addEventListener('click', _ => navCheckbox.checked = false))
}


const Nav = () => (
    
    <div className='navigation'>
        <input type="checkbox" class="navigation__checkbox" id="nav-toggle"/>

        <label for="nav-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav className='navigation__nav'>
         <div className='navigation__nav-items'>
        <Link className='navigation__nav-items--link' to='/' onClick={handleClick}>
            HOME
        </Link>
        <Link className='navigation__nav-items--link' to='/about' onClick={handleClick}>
            ABOUT
        </Link>
        <Link className='navigation__nav-items--link' to='/dinners' onClick={handleClick}>
            DINNERS
        </Link>
        <Link className='navigation__nav-items--link' to='/planner' onClick={handleClick}>
            PLANNER 
        </Link>
        </div> 
        </nav>

    </div>


);

export default Nav;
