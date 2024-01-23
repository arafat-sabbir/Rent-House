import { Link, NavLink } from "react-router-dom";
import Container from "../../Utility/Container/Container";
import useAuth from "../../Utility/Hooks/useAuth";
import useUserData from "../../Utility/Hooks/useUserData";

const Navbar = () => {

    const { loading } = useAuth()
    // const handleSignOut = () => {
    //     return localStorage.removeItem('user');
    // }
    const user = useUserData()
    console.log(user);
    // Navigation Links 
    const NavLinks = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/ami'}>Ami</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>

    </>
    return (
        <Container>
            <nav className="navbar  mt-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLinks}
                        </ul>
                    </div>
                    <a className="text-xl">Rent Hunter</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-bottom dropdown-end z-50 ">
                        <label tabIndex={0} className="">
                            {user && (
                                <img
                                    className="w-12 mr-4 h-12  rounded-full border-2 border-main  "
                                    src={user?.photo || "https://i.ibb.co/KyvcDKK/22-223965-no-profile-picture-icon-circle-member-icon-png.png"}
                                    alt=""
                                />
                            )}
                            {user && (
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
                                            className="btn hover:bg-main bg-main border-none rounded-full text-white"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                </ul>
                            )}
                        </label>
                    </div>
                    {
                        !user && <Link to='/signIn' className="btn bg-black hover:bg-black border-y-4 text-white border-red-500">Sign In</Link>
                    }

                </div>
            </nav>
        </Container>
    );
};

export default Navbar;