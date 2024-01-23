import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout/MainLayout"
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddNewHouse from "../Pages/Dashboard/AddNewHouse/AddNewHouse";
import MyListedHouse from "../Pages/Dashboard/MyListedHouse/MyListedHouse";
import UpdateRoom from "../Pages/Dashboard/MyListedHouse/UpdateRoom/UpdateRoom";

const routes = createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage/>,
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
    },
    {
        path:'/dashboard',
        errorElement:<ErrorPage/>,
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:'addNewHouse',
                element:<AddNewHouse/>
            },
            {
                path:'myListedHouse',
                element:<MyListedHouse/>
            },
            {
                path:'updateRoom/:id',
                element:<UpdateRoom></UpdateRoom>
            }
        ]
    }
])

export default routes;