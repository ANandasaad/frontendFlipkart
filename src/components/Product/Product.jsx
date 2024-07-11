import React from "react";
import ProductCard from "./ProductCard";
import { electronicsProducts, ProductHeader } from "../../utils/data";

const Product = () => {
  const header = "Best of Electronics";
  return (
    <div>
      <ProductCard header={header} data={electronicsProducts} />
    </div>
  );
};

export default Product;
