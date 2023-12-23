import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
const Navbar = () => {
  const { login, logout, loading, isToken, cart } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-xs"></span>;
      </div>
    );
  }

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
          <a href="/" className="btn btn-ghost text-xl">
            Inno React
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {/* items would be here */}
          </ul>
        </div>
        <div className="navbar-end ">
          {isToken ? (
            <>
              <button className="btn btn-outline mr-2" onClick={() => logout()}>
                Sign out
              </button>
            </>
          ) : (
            <button className="btn btn-outline mr-2" onClick={() => login()}>
              Sign in
            </button>
          )}
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">
              {cart?.length}
            </span>
            <IoCartOutline className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
