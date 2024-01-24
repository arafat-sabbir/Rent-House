import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Utility/Hooks/useAuth";
import PropTypes from 'prop-types';
import useUserData from "../../Utility/Hooks/useUserData";

const PrivateRoute = ({children}) => {
    const {loader} = useAuth()
    const {userEmail} = useUserData()
    const location = useLocation()
    if(loader){
        return <p className="h-screen justify-center items-center loading-spinner"></p>
    }
    if(userEmail){
        return children
    }
    else{
        return <Navigate state={location?.pathname} to={"/signIn"}></Navigate>
    }
    
};

export default PrivateRoute;

PrivateRoute.propTypes={
    children:PropTypes.node
}