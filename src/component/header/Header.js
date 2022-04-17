import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav id="navbar-example2" className="navbar  px-4">
                <div className='d-flex ms-2'>
                    <Link className="nav-link nav-links-componnt" to='/'>HOME</Link>
                    <Link className="nav-link nav-links-componnt" to='/blog'>BLOG</Link>
                    <Link className="nav-link nav-links-componnt" to='/about'>ABOUT</Link>

                </div>
                <ul className="nav nav-pills">
                    <li className="nav-item d-flex">
                        <Link className="super-log-links" to='/login'>Log In</Link>
                        <Link className=" nav-links-sing" to='/signup'>Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;