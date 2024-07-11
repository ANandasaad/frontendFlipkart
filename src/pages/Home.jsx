import React from "react";
import Header from "../components/Header";
import ProductCategories from "../components/ProductCategories";
import Product from "../components/Product/Product";

const Home = () => {
  return (
    <div className=" flex flex-col gap-3 bg-gray-50">
      <Header />
      <div className="container mx-auto bg-white">
        <ProductCategories />
        <Product />
      </div>
    </div>
  );
};

export default Home;
