import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const { searchQuery, minPrice, maxPrice } = useAuth();
  useEffect(() => {
    // Add a check for an empty search query to prevent unnecessary API calls
    const apiUrl = searchQuery
      ? `https://dummyjson.com/products/search?q=${searchQuery}`
      : "https://dummyjson.com/products";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, [searchQuery]);

  // Filter products based on price range
  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-screen">
      {/* Display filtered products */}
      {filteredProducts.map(
        ({ id, title, thumbnail, description, brand, category, price }) => (
          <div
            key={id}
            className="card bg-base-100 shadow-xl overflow-hidden w-80"
          >
            <figure className="h-48 overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={thumbnail}
                alt="product-img"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="font-bold mb-2">{title}</h2>
              <div className="badge badge-secondary mb-2">{brand}</div>
              <p className="text-base text-gray-600 h-20 overflow-hidden">
                {description}
              </p>
              <div className="card-actions flex justify-between items-center mt-2">
                <div className="badge badge-outline">{category}</div>
                <div className="badge badge-outline">${price}</div>
                <button className="btn btn-outline">Add to Cart</button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ProductCard;
