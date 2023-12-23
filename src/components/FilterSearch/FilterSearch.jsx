import React from "react";
const FilterSearch = () => {
  return (
    <div>
      <div className="flex items-baseline justify-between max-w-5xl mx-auto">
        {/* price filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
          <span cl>Price : </span>
          <input type="number" placeholder="Max" className="max-w-[4rem]" />
          <input type="number" placeholder="Min" className="max-w-[4rem]" />
          <button className="btn btn-outline">Apply</button>
        </div>
        {/* search bar */}
        <div>
          <input
            type="search"
            placeholder="Search"
            className="input input-bordered lg:max-w-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
