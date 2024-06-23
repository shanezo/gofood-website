import React from "react";

const Category = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <div className="category-nav">
      <h3>Shop by Category</h3>
      <h2>Top Category Of Organic Food</h2>
      <div className="category">
        {categories.map((category, index) => (
          <button
          className={selectedCategory === category ? "category-button-selected" : "category-button"}
            key={index}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Category;
