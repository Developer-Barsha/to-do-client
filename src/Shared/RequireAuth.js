import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({children}) => {
    const user = false;
    const location = useLocation();
    if(!user){
        <Navigate to={'/login'} state={{from : location}} replace/>
    }

    return children;
};

export default RequireAuth;