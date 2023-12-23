import React from "react";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="container mx-auto">
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
              {/* items would be here */}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Inno React</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* items would be here */}
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn btn-outline  ">Sign in</a>
          <a className="btn btn-outline btn-accent mx-2">Sign up</a>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">0</span>
            <IoCartOutline className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
