import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import useAxios from "../../Utility/Hooks/useAxios";

export const Context = createContext(null)
const AuthProvider = ({ children }) => {
    const axios = useAxios()
    const [loading, setLoading] = useState(true)

    const signOut = ()=>{
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userName')
        localStorage.removeItem('role')
        localStorage.removeItem('token')
    }

    // Get the logged In User Data From Database
    const getSignInUserData = async (userData) => {
        console.log("userEmailIs", userData);
        setLoading(true);
        try {
            const {userEmail,userName,role} = userData;
           if(userEmail){
            axios.post('/jwt',userEmail)
            .then(res=>{
                console.log(res.data);
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
                }
            })
            localStorage.setItem('userEmail',JSON.stringify(userEmail))
            localStorage.setItem('userName',JSON.stringify(userName))
            localStorage.setItem('role',JSON.stringify(role))
           }else{
            localStorage.removeItem('userEmail')
            localStorage.removeItem('userName')
            localStorage.removeItem('role')
            localStorage.removeItem('token')
           }
        } catch (error) {
            console.log(error);
        }
    }
    const contextValue = {
        getSignInUserData,
        loading,
        signOut
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