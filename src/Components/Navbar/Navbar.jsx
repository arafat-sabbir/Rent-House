import { Link, NavLink } from "react-router-dom";
import Container from "../../Utility/Container/Container";
import useAuth from "../../Utility/Hooks/useAuth";
import useUserData from "../../Utility/Hooks/useUserData";
import { useState } from "react";

const Navbar = () => {
const [loggedOut,setLoggedOut] = useState(false)
    const { signOut } = useAuth()
    const handleSignOut = () => {
        signOut()
        setLoggedOut(!loggedOut)
    }
    const user = useUserData()
    // Navigation Links 
    const NavLinks = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={`${user.role==="House Owner"?"/dashboard/myListedHouse":'/dashboard/myBookedHouse'}`}>Dashboard</NavLink></li>

    </>
    return (
        <Container>
            <nav className="navbar  mt-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0}  className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                 <Link to={'/'} className="flex justify-center items-center gap-2">
                    <img className="h-12 w-12" src="https://i.ibb.co/hLg6XWx/Untitled-design-3.png" alt="" />
                 <p to={'/'} className="text-xl font-semibold">Rent Hunter</p>
                 </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-end z-50 ">
                        <label tabIndex={0} className="">
                            {user.userEmail && (
                                <img
                                    className="w-12 mr-4 h-12  rounded-full border-2 border-main  "
                                    src={user?.photo || "https://i.ibb.co/KyvcDKK/22-223965-no-profile-picture-icon-circle-member-icon-png.png"}
                                    alt=""
                                />
                            )}
                            {user.userEmail && (
                                <ul className="p-2 shadow menu dropdown-content bg-white   z-[50]  rounded-box w-56">
                                    <img
                                        className=" w-12 mx-auto  rounded-full mb-2 mt-2 border-2 border-main"
                                        src={user?.photo || "https://i.ibb.co/KyvcDKK/22-223965-no-profile-picture-icon-circle-member-icon-png.png"}
                                        alt=""
                                    />
                                    <p className="font-semibold text-center mr-2 mb-2 text-main ">
                                        {user?.userName}
                                    </p>
                                    <p className="font-semibold text-center mr-2 mb-2  text-main ">
                                        {user?.userEmail}
                                    </p>
                                    <div className="pb-2 mx-auto">
                                        <button
                                        onClick={handleSignOut}
                                            className="btn hover:bg-main bg-main border-none rounded-sm text-white"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                </ul>
                            )}
                        </label>
                    </div>
                    {
                        !user.userEmail && <Link to='/signIn' className="btn bg-black hover:bg-black border-y-4 text-white border-red-500">Sign In</Link>
                    }

                </div>
            </nav>
        </Container>
    );
};

export default Navbar;