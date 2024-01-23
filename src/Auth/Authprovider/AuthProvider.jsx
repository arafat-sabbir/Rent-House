import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import useAxios from "../../Utility/Hooks/useAxios";

export const Context = createContext(null)
const AuthProvider = ({ children }) => {
    const axios = useAxios()
    const [loading, setLoading] = useState(true)

    // Get the logged In User Data From Database
    const getSignInUserData = async (email) => {
        console.log("userEmailIs", email);
        setLoading(true);
        try {
            const response = await axios.get(`/getUserInfo?email=${email}`);
            localStorage.setItem('user', JSON.stringify(response.data));

        } catch (error) {
            console.log(error);
        }
    }
    const contextValue = {
        getSignInUserData,
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