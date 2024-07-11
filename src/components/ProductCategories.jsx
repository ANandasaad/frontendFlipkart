import React from "react";
import Categories from "../utils/productCategories";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ProductCategories = () => {
  return (
    <div className="flex justify-evenly items-center gap-3 shadow-md py-4">
      {Categories.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.img} alt={item.category} />
            <h3 className="flex items-center gap-1 font-bold ">
              {item.category}
              {(item.id === 2 ||
                item.id === 4 ||
                item.id === 5 ||
                item.id === 6 ||
                item.id === 8 ||
                item.id === 9) && (
                <div className="transition-transform transform hover:rotate-180">
                  <div className="">
                    <IoIosArrowUp />
                  </div>
                </div>
              )}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCategories;
