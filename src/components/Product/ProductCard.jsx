import React, { Fragment } from "react";

const ProductCard = ({ header, data }) => {
  return (
    <div className="py-5 shadow-lg">
      <h2 className="px-4 py-2 font-bold text-3xl">{header}</h2>
      <div className="flex items-center gap-3 px-4 overflow-x-auto w-full">
        {data.map((item) => (
          <div
            className="relative flex items-center flex-col  text-gray-700 bg-white bg-clip-border border  mx-2" // Added mx-2 for even side spacing
            key={item.id}
          >
            <div className="relative mx-4 mt-4  text-gray-700 bg-white bg-clip-border  hover:scale-110">
              <img
                src={item.img}
                alt="profile-picture"
                className=" w-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="block mb-2 text-sm font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
                {item.name.length > 15
                  ? item.name.slice(0, 15) + "..."
                  : item.name}
              </h4>
              <div className="block mb-2 font-sans antialiased leading-snug tracking-normal text-blue-gray-900 w-32 text-sm">
                From {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
