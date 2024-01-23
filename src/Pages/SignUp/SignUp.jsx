import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { GoEye, GoEyeClosed } from "react-icons/go";
import useAxios from "../../Utility/Hooks/useAxios";
import toast from "react-hot-toast";

const SignUp = () => {
    
    const axios = useAxios()
    const navigate = useNavigate()

    // Toggle Show & Hide Password State
    const [showPassword, setShowPassword] = useState(true)

    // Toggle Show & Hide Password Function
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    //  Manage The Error And Show To The User
    const [error, setError] = useState('')
    const handleSubmit = async(e) => {
        e.preventDefault()
        const toastId = toast.loading("SignUp Processing")
        const form = e.target;
        const userInfo = {
            userName: form.name.value,
            phoneNumber: form.phone.value,
            userEmail: form.email.value,
            password: form.password.value,
        }
        console.log(userInfo);
        try {
            const response = await axios.post('/signUp', userInfo);
    
            if (response.data.insertedId) {
                console.log(response.data);
                toast.success("Sign Up Successful Please Sign In", { id: toastId });
                navigate('/signIn')
            } else if (response.data.message === "User Already Exist") {
                toast.error("Email Already Exists", { id: toastId });
            }
        } catch (error) {
            toast.error(error.message || "Internal Server Error", { id: toastId });
        }
    }

    return (
        <div>
            <div className="h-screen my-auto w-screen mx-auto">
                <div className="flex flex-col justify-center items-center h-full">
                    <h1 className="text-5xl font-semibold leading-3 tracking-widest">
                        Sign Up Now
                    </h1>
                    <Link to={'/'} className="text-xl font-semibold absolute  left-72 top-10"> <span className="flex  gap-2 hover:text-main duration-300 transition-all justify-center items-center">  <IoHomeOutline size={26} /> Go Home</span> </Link>
                    <div className="card  lg:w-1/3 bg-transparent pt-3">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-4">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-black">Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your name"
                                            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-black">Phone Number</span>
                                        </label>
                                        <input
                                            type="number"
                                            name="phone"
                                            placeholder="Phone Number"
                                            className="input rounded-sm  bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-black">Email</span>
                                        </label>
                                        <input
                                            type="emil"
                                            name="email"
                                            placeholder="Email"
                                            className="input rounded-sm  bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
                                            required
                                        />
                                    </div>
                                    <div className="form-control w-full">
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
                                            <div className="my-1 text-red-400 font-medium">
                                                {error && <p>{error}</p>}
                                            </div>
                                            <span
                                                className="absolute top-4 right-2 cursor-pointer"
                                                onClick={handleShowPassword}
                                            >
                                                {showPassword ? <GoEye /> : <GoEyeClosed />}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className="border font-semibold  py-2 rounded-sm border-gray-500"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                            <div>
                                <p className="my-4  text-black font-medium">
                                    Do not have a account ?
                                    <Link to={"/signIn"} className=" font-bold text-main">
                                        Sign In
                                    </Link>
                                </p>
                            </div>
                            {/* <GoogleSignIn></GoogleSignIn> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;