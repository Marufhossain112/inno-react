import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-5 pt-4 pb-10">
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
