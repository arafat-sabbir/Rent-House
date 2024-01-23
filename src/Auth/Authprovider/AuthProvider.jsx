import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useAxios from "../../Utility/Hooks/useAxios";

export const Context = createContext(null)
const AuthProvider = ({ children }) => {
    const axios = useAxios()

    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true)

    // Get the logged In User Data From Database
    const getSignInUserData = async (email) => {
        console.log("userEmailIs", email);
        setLoading(true);
        try {
            const response = await axios.get(`/getUserInfo?email=${email}`);
            setUser(response.data);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }
    }
    const contextValue = {
        getSignInUserData,
        user,
        loading,    
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}