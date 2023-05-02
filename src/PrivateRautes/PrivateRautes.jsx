import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../components/contexts/AuthProvide';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if(loading){
        return <progress className="progress w-3/4 lg:ms-32 ms-12"></progress>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoutes;