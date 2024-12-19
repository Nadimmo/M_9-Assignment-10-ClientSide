/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const Links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/craft"}>All Art&Craft</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/addcraft"}>Add Craft Item</NavLink>
          </li>
          <li>
            <NavLink to={"/mycraft"}>My Craft&Craft List</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Mike's Landscaping</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">

        {user ? (
          <>
            <img src={user.photoURL} alt="" className="w-[50px] h-[50px] rounded-[50%] mr-2" title={user.displayName}/>
            <Link onClick={logOut} className="btn btn-info">
              Sign out
            </Link>
          </>
        ) : (
          <Link to={"/login"} className="btn btn-info">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
