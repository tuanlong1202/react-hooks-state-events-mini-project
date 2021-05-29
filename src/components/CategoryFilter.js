import React from "react";

function CategoryFilter({categories, onCategoryButtonClick, selectedCategory}) {
  const items = categories;
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        items.length > 0 
        ? items.map((item,index) => {
          return (
            <button key={index} onClick={onCategoryButtonClick} value={item} className={(item===selectedCategory)? "selected" : ""}>{item}</button>
          )
        })
        : null
       }
    </div>
  );
}

export default CategoryFilter;
