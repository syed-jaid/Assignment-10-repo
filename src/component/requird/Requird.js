import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const Requird = ({ children }) => {
    const location = useLocation();
    const [user] = useAuthState(auth)

    if (!user) {
        return <Navigate to='/signup' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default Requird;