import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GoEye, GoEyeClosed } from "react-icons/go";
import useAxios from "../../Utility/Hooks/useAxios";
import toast from "react-hot-toast";
import useAuth from "../../Utility/Hooks/useAuth";

const SignIn = () => {

    const axios = useAxios()
    const navigate = useNavigate()
    const location = useLocation()
    const { getSignInUserData, user } = useAuth()


    // Toggle Show & Hide Password State
    const [showPassword, setShowPassword] = useState(false)
    // Toggle Show & Hide Password Function
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    //  Manage The Error And Show To The User
    const [error, setError] = useState('')
    const handleSignIn = (e) => {
        e.preventDefault()
        const toastId = toast.loading("SignIn In..")
        const form = e.target;
        const userData = {
            userEmail: form.email.value,
            password: form.password.value
        }
        axios.patch('/signIn', userData)
            .then(res => {
                console.log(res.data.signIn);
                if (res.data.message === "No Account Found") {
                    return toast.error("Invalid Email Address", { id: toastId })
                } else if (res.data.message === "Password Doesn't Match Try Again") {
                    return toast.error("Invalid Password Try Again", { id: toastId })
                } else if (res.data.signIn) {
                    toast.success("Successfully Signed In", { id: toastId })
                    getSignInUserData(res.data.loggedUserData)
                    form.reset()
                    return navigate(location.state ? location.state : '/')
                }
            })
    }
    return (
        <div className="h-screen my-auto w-screen mx-auto">
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-5xl font-semibold leading-3 tracking-widest">
                    Welcome Back
                </h1>
                <Link
                    to={"/"}
                    className="text-xl font-semibold absolute  left-72 top-10"
                >
                    <span className="flex  gap-2 hover:text-main duration-300 transition-all justify-center items-center">
                        <IoHomeOutline size={26} /> Go Home
                    </span>
                </Link>
                <div className="card  w-1/3   pt-3  bg-transparent">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Email</span>
                                </label>
                                <input
                                    type="emil"
                                    name="email"
                                    placeholder="Email"
                                    className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-black">Password</span>
                                </label>
                                <div className="form-control relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                                        required
                                    />
                                    <span
                                        className="absolute top-4 text-black cursor-pointer right-2"
                                        onClick={handleShowPassword}
                                    >
                                        {showPassword ? <GoEye /> : <GoEyeClosed />}
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    type="submit"
                                    className="border font-semibold  py-2 rounded-sm border-gray-500"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="my-1 text-red-400 font-medium">
                            {error && <p>Error : {error}</p>}
                            <p className="my-4 text-black">
                                Do not have a account ?{" "}
                                <Link to={"/signUp"} className=" font-bold text-main">
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;