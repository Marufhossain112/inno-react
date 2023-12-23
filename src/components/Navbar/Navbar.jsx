import React from "react";
import toast from "react-hot-toast";
import { IoCartOutline } from "react-icons/io5";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
const Navbar = () => {
  const { login, logout, loading, isToken } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-xs"></span>;
      </div>
    );
  }
  // const isToken = localStorage.getItem("token");
  // // console.log(isToken);
  // const loginUrl = "https://dummyjson.com/auth/login";
  // // Function to handle the login process
  // const login = async () => {
  //   try {
  //     const response = await fetch(loginUrl, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         username: "kminchelle",
  //         password: "0lelplR",
  //         // expiresInMins: 60, // optional
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Login failed");
  //     }

  //     const data = await response.json();
  //     localStorage.setItem("token", data.token);
  //     toast.success("Login successful");

  //     // console.log(data);
  //   } catch (error) {
  //     console.error("Error during login:", error.message);
  //   }
  // };
  // const logout = async () => {
  //   try {
  //     localStorage.removeItem("token");
  //     toast.success("Logout successful");
  //   } catch (error) {
  //     console.error("Error during logout:", error.message);
  //   }
  // };

  // Call the login function
  // login();

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
            <span className="indicator-item badge badge-secondary">0</span>
            <IoCartOutline className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
