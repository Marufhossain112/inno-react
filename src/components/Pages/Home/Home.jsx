import React, { useState } from "react";
import Products from "../../Products/Products";
import FilterSearch from "../../FilterSearch/FilterSearch";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../../../contexts/AuthContext/AuthContext";

const Home = () => {
  const { isToken, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-xs"></span>;
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      {!isToken ? (
        <div className="min-h-[90vh] flex justify-center items-center text-xl">
          You must need to login first, in order to view products
        </div>
      ) : (
        <>
          <FilterSearch />
          <Products />
        </>
      )}

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
