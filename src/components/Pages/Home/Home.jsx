import React from "react";
import Products from "../../Products/Products";
import FilterSearch from "../../FilterSearch/FilterSearch";

const Home = () => {
  return (
    <div className="container mx-auto">
      <FilterSearch />
      <Products />
    </div>
  );
};

export default Home;
