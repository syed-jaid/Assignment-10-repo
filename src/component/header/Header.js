import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const user = useAuthState(auth)
    const naviget = useLocation()
    const navgaiteValue = naviget.pathname;
    const logout = () => {
        signOut(auth);
    };
    return (
        <div>
            <nav id="navbar-example2" className="navbar  px-4">
                <div className='d-flex ms-2'>
                    <h5 className='webname mt-2'>PHOTO MAX</h5>
                    <Link className="nav-link nav-links-componnt" to='/'>HOME</Link>
                    <Link className="nav-link nav-links-componnt" to='/blog'>BLOG</Link>
                    <Link className="nav-link nav-links-componnt" to='/about'>ABOUT ME</Link>
                </div>
                <ul className="nav nav-pills">
                    <li className="nav-item d-flex">

                        {
                            user[0] ? <Link className="super-log-links" to='/' onClick={logout}>Log Out</Link> : <div className='mt-2'>
                                {
                                    navgaiteValue === '/signup' ? <Link className=" nav-links-sing" to='/signup'>Sign Up</Link> : ''
                                }
                                {
                                    navgaiteValue === '/login' ? <Link className=" nav-links-sing" to='/signup'>log in</Link> : ''
                                }

                            </div>
                        }

                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;