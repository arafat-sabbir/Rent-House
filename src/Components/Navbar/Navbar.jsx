import { Link, NavLink } from "react-router-dom";
import Container from "../../Utility/Container/Container";

const Navbar = () => {
    // Navigation Links 
    const NavLinks = <>

        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/ami'}>Ami</NavLink></li>
        <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>

    </>
    return (
        <Container>
            <nav className="navbar bg-base-100">
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
                    <Link to='/signIn' className="btn bg-black hover:bg-black border-4 text-white border-red-500">Sign In</Link>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;