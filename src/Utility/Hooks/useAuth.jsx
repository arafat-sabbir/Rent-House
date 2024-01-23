import { useContext } from "react";
import { Context } from "../../Auth/Authprovider/Authprovider";

const useAuth = () => {
    const auth = useContext(Context)
    return auth;
};

export default useAuth;