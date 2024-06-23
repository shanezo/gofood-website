import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product-item">
          <img src={product.strMealThumb} alt={product.strMeal} />
          <div className="product-info">
            <div>
              <h3>{product.strMeal}</h3>
              <h3>$8.45</h3>
            </div>
            <hr className="dashed" />
            <div className="product-footer">
              <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
              <button>
                Shop Now{" "}
                <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
