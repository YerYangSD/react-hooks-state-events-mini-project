import React, { useState } from "react";

function CategoryFilter({ categories }) {
  const [selectCategory, setSelectCategory] = useState("All")
  const onCategoryClicked = (category) => {
    setSelectCategory(category)
  }

  const displayCategoryList = categories.map((category) => {
    return <button className={`${selectCategory === category ? "selected" : ""}`} key={category} onClick={() => onCategoryClicked(category)
    }> {category}</button >
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {displayCategoryList}
    </div>
  );
}

export default CategoryFilter;
