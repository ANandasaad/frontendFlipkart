import React from "react";
import ProductCard from "./ProductCard";
import {
  ProductCardDetails,
  ProductDetails,
  TrendingProductsDetails,
} from "../../utils/data";
import TrendingProduct from "./TrendingProduct";

const Product = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 ">
        {ProductCardDetails.map((item) => (
          <ProductCard key={item.id} header={item.header} data={item.data} />
        ))}
      </div>

      <div className="flex  gap-3 w-full py-2">
        {TrendingProductsDetails.map((item) => (
          <TrendingProduct
            key={item.id}
            header={item.header}
            data={item.data}
          />
        ))}
      </div>
      <div className="flex flex-col gap-3 ">
        {ProductDetails.map((item) => (
          <ProductCard key={item.id} header={item.header} data={item.data} />
        ))}
      </div>
    </div>
  );
};

export default Product;
