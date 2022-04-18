import React from 'react';
import './Requerd.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loging from '../Loging';

const Requird = ({ children }) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loging></Loging>
    }
    if (!user) {
        return <Navigate to='/signup' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default Requird;