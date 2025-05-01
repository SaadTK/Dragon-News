import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("./categories.json").then((res) => res.json());
const Categories = () => {
  //   console.log(categoryPromise);
  const categories = use(categoryPromise);
  //   console.log(categories);

  return (
    <>
      <div>
        <h2 className="font-bold">All Categories: {categories.length}</h2>
      </div>

      <div className="grid grid-cols-1 mt-5">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="font-semibold text-accent btn bg-base-100
          hover:bg-base-200 border-0"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Categories;
