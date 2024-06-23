import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>Discount up to 20%</h2>
        <h1>Buy Fresh And Organic Grocery Food</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Condimentum sed sed blandit
          purus nec nibh tortor ipsum. Placerat consequat lorem.
        </p>
        <div className="stats">
          <button>
            Shop Now{" "}
            <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
          </button>
          <div><div className="stat-number">35k+</div> Users</div>
          <div><div className="stat-number">18k+</div> Products</div>
        </div>
      </div>
      <div className="banner-image">
        <img src="/banner-img.png" alt="Organic Food" />
      </div>
    </div>
  );
};

export default Banner;
