import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaListCheck } from "react-icons/fa6";
import { IoReturnUpBack } from "react-icons/io5";
import { FaListUl, FaListOl } from "react-icons/fa6";
import { BiLogOutCircle } from "react-icons/bi";
import { IoAddSharp } from "react-icons/io5";
import useUserData from "../../Utility/Hooks/useUserData";
import useAuth from "../../Utility/Hooks/useAuth";
import { useState } from "react";


const Dashboard = () => {
  const user = useUserData()
  const navigate = useNavigate()
  const [loggedOut, setLoggedOut] = useState(false)
  const { signOut } = useAuth()
  const handleSignOut = () => {
    signOut()
    setLoggedOut(!loggedOut)
    navigate('/')
  };

  return (
    <div className="flex" key={loggedOut}>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content !h-full">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className=" btn bg-black text-white border-y-4 border-y-main drawer-button lg:hidden absolute top-4 left-4"
          >
            <FaListUl></FaListUl>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu p-4 w-80 min-h-screen md:bg-transparent !bg-[#FFF6EB]">
            {/* Sidebar content here */}
            <div className=" top-10 flex  flex-col justify-center items-center">
              {/* Logo and name */}
              <Link
                to={"/"}
                className="flex justify-center items-center hover:flex mt-4"
              >
                <img
                  src="https://i.ibb.co/8m1d6zD/Untitled-design.png"
                  className="w-20 h-20"
                  alt=""
                />
              </Link>
              {/* User info */}
              <div className="flex mt-8 gap-2 items-center">
                <img
                  src={user?.photo || "https://i.ibb.co/KyvcDKK/22-223965-no-profile-picture-icon-circle-member-icon-png.png"}
                  className="h-14 w-14  rounded-full mx-auto "
                  alt=""
                />
                <div>
                  <h1 className="font-semibold text-xl mt-2">
                    {user?.userName}
                  </h1>
                  <h3>{user?.creationDate}</h3>
                </div>
              </div>
              {/* Navigation */}
              <div className="absolute bottom-4  w-full flex flex-col items-center">
                <Link to={"/"} className="w-full">
                  <button className="text-lg font-bold  flex justify-center gap-2 text-main p-2 rounded-sm mt-2 left-80 hover:bg-red-100 w-full hover:text-black transition-all duration-300 top-10">
                    <span className="text-2xl">
                      <IoReturnUpBack />
                    </span>
                    Home
                  </button>
                </Link>
                <button onClick={handleSignOut} className="w-full text-lg font-bold  flex justify-center gap-2 text-main p-2 rounded-sm mt-2 left-80 hover:bg-red-100 hover:text-black transition-all duration-300 top-10">
                  <span className="text-2xl">
                    <BiLogOutCircle />
                  </span>
                  Sign Out
                </button>
              </div>
            </div>
            {/* Routes Based on Role */}
            {/* Global Route */}
            {user?.role === "House Owner" ? (
              <>
                <NavLink to={"/dashboard/addNewHouse"}>
                  <button className="text-center py-2 bg-red-100 px-12  flex items-center mt-10 justify-center text-[15px] font-medium min-w-full">
                    <IoAddSharp className="mr-4 text-lg"></IoAddSharp> Add New House
                  </button>
                </NavLink>
                <NavLink to={"/dashboard/myListedHouse"}>
                  <button className="text-center py-2 bg-red-100 px-12  flex items-center mt-10 justify-center text-[15px] font-medium min-w-full">
                    <FaListOl className="mr-4"></FaListOl> My Listed House
                  </button>
                </NavLink>
              </>
            ) : user?.role === "House Renter" ? (
              <>
                <NavLink to={"/dashboard/myBookedHouse"}>
                  <button className="text-center py-2 bg-red-100 px-12  flex items-center mt-10 justify-center text-[15px] font-medium min-w-full">
                    <FaListCheck className="mr-4"></FaListCheck> My Booked House
                  </button>
                </NavLink>
              </>
            ) : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
