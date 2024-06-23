import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faShoppingCart,
  faChevronDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>GO FOOD</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>{" "}
          <FontAwesomeIcon icon={faChevronDown} className="accordion-icon" />
        </li>
        <li>
          <a href="#groceries">Groceries</a>{" "}
          <FontAwesomeIcon icon={faChevronDown} className="accordion-icon" />
        </li>
        <li>
          <a href="#pages">Pages</a>{" "}
          <FontAwesomeIcon icon={faChevronDown} className="accordion-icon" />
        </li>
        <li>
          <a href="#connect">Connect with us</a>{" "}
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </li>
      </ul>
      <div className="navbar-icons">
        <a href="#search">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="#user">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="#cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
