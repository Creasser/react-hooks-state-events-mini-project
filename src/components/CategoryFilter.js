import React, { useState } from "react";


function CategoryFilter({category, selectedCategory, setCategory}) {
  
  function handleCategoryChange(e){
    setCategory(e.target.textContent)
  }

  const categoryButtons = category.map((cat) => {
    const classs = cat === selectedCategory ? 'selected' : ''
    return <button key={cat} onClick={handleCategoryChange} className={classs}>{cat}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;

