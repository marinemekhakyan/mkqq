import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

const Nav = () => (
    <div className='navigation'>
        <input type="checkbox" class="navigation__checkbox" id="nav-toggle"/>

        <label for="nav-toggle" class="navigation__button">
        <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>


        {/* <FontAwesomeIcon icon={faHamburger} className='navigation__hamburger'/> */}

        <nav className='navigation__nav'>
         <div className='navigation__nav-items'>
        <Link className='navigation__nav-items--item' to='/'>
            HOME
        </Link>
        <Link className='navigation__nav-items--item' to='/about'>
            ABOUT
        </Link>
        <Link className='navigation__nav-items--item' to='/dinners'>
            DINNERS
        </Link>
        <Link className='navigation__nav-items--item' to='/planner'>
            PLANNER 
        </Link>
        </div> 
        </nav>

    </div>
);

export default Nav;