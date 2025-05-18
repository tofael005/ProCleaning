// import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Loader from '../Pages/Loader';
import { useAuth } from '../firebase/AuthProvider';
// import { useAuth } from '../firebase/AuthProvider';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from './firebase/AuthProvider';



const PrivateRouter = ({ children }) => {
    // const { loading, user } = useAuth()
    const location = useLocation();
    const { user, loading } = useAuth();
    if (loading) {
        return <Loader/>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to="/login "></Navigate>;
    // <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRouter;