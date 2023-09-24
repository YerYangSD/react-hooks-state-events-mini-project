import React from "react";

function CategoryFilter({ categories }) {
  const displayCategoryList = categories.map((category) => {
    return <button key={category}>{category}</button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategoryList}
    </div>
  );
}

export default CategoryFilter;
