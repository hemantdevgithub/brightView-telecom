import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { user, isLoading } = useSelector((state) => state.auth);
    const navigate = useNavigate()
    const location = useLocation()
    if (isLoading) {
        return <div className='min-h-screen flex items-center justify-center'>
            <BounceLoader color="#1370b5" />
        </div>
    }

    if (user === null) {
        toast.error("Please Login First!")
        // return navigate("/login", { replace: true, state: { from: location } })
        return <Navigate to={'/login'} replace state={{ from: location }} />
    }

    return user && <Component />
};

export default PrivateRoute;