import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./components/Banner";
import Category from "./components/Category";
import ProductList from "./components/ProductList";
import "./App.css";
import NavBar from "./components/NavBar";
//import {Bars} from "react-loader-spinner";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        console.log(response.data);
        const limitedCategories = response.data.categories.slice(1, 7).map((cat) => cat.strCategory);
        setCategories(limitedCategories);
        
        // Set the first category as selected by default
        if (limitedCategories.length > 0) {
          setSelectedCategory(limitedCategories[0]);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setLoading(true);
      // Fetch products based on selected category
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
        )
        .then((response) => {
          const limitedProducts = response.data.meals.slice(0, 6);
          setProducts(limitedProducts);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching products:", error));
        setLoading(false);
    }
  }, [selectedCategory]);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Category
        categories={categories}
        onSelectCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {loading ? (
        <p>loading...</p>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default App;
