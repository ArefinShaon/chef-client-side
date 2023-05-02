import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../../public/bd-chef.png";
import { AuthContext } from "../contexts/AuthProvide";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-base-200 text-base-content">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-pink-600 text-neutral-content rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
            </ul>
          </div>
          <a className="normal-case  lg:pl-20 w-64 pb-4">
            <img src={img} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:text-pink-600 font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-pink-600 font-bold">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-pink-600 font-bold">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-pink-600 font-bold">
              <Link to="/signup">Register</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end font-bold text-pink-600 ">
          {user ? (
            <>
              <span className="tooltip">
                {user.photoURL ? (
                  <img
                    className="rounded-full w-12 mx-2"
                    src={user.photoURL}
                    alt=""
                    title={user.displayName}
                  />
                ) : (
                  <FaUser className="rounded-full w-12 mx-2" />
                )}
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-pink-600 "
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
