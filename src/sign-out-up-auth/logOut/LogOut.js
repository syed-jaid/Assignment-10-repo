import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const LogOut = () => {
    const naviget = useNavigate()
    const logout = () => {
        signOut(auth);
        naviget('/')
    };
    return (
        <div className='form-main-div'>
            <h5 className='text-center'>You want to log out</h5>
            <button className='submit-button' onClick={logout}>Log Out</button>
        </div>
    );
};

export default LogOut;