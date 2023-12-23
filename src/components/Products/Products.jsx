import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 py-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
