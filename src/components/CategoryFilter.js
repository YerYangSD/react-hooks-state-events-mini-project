import React, { useState } from "react";

function CategoryFilter({ categories, selectCategory, setSelectCategory }) {

  function onCategoryClicked(category) {
    setSelectCategory(category)
  }

  const displayCategoryButtons = categories.map((category) => {
    return <button className={`${selectCategory === category ? "selected" : ""}`} key={category} onClick={() => onCategoryClicked(category)
    }> {category}</button >
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategoryButtons}
    </div>
  );
}

export default CategoryFilter;
