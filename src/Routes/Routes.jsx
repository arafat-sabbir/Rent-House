import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout/MainLayout"
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    },
    {
        path:"/signIn",
        element:<SignIn/>
    },
    {
        path:"/signUp",
        element:<SignUp/>
    }
])

export default routes;