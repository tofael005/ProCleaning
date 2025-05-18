// import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
// import { useAuth } from '../Firebase/AuthProvider';
import Loader from '../Pages/Loader';
import { useAuth } from '../Firebase/AuthProvider';





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