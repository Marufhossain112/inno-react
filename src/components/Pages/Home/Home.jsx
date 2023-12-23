import React from "react";
import Products from "../../Products/Products";
import FilterSearch from "../../FilterSearch/FilterSearch";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <div className="container mx-auto">
      <FilterSearch />
      <Products />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
