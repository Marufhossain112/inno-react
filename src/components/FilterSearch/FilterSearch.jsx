import React from "react";
import { useAuth } from "../../contexts/AuthContext/AuthContext";
const FilterSearch = () => {
  const { setSearchQuery, setMinPrice, setMaxPrice } = useAuth();
  const handleSearch = (data) => {
    setSearchQuery(data.target.value);
  };
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-center lg:justify-between max-w-5xl mx-auto gap-3">
        {/* price filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
          <span cl>Price : </span>
          <input
            type="number"
            placeholder="Min"
            className="max-w-[4rem]"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            className="max-w-[4rem]"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        {/* search bar */}
        <div>
          <input
            type="search"
            placeholder="Search"
            className="input input-bordered lg:max-w-lg "
            onChange={(e) => handleSearch(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
