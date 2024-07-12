import React from "react";

const TrendingProduct = ({ header, data }) => {
  return (
    <div className=" py-5 shadow-lg">
      <h2 className="px-4 py-2 font-bold text-xl">{header}</h2>
      <div className="flex items-center justify-center flex-wrap ">
        {data.map((item) => (
          <div
            className="relative flex items-center flex-col text-gray-700 bg-white bg-clip-border border mx-2 my-2 w-40" // Set width and add spacing
            key={item.id}
          >
            <div className="relative mx-4 mt-4 text-gray-700 bg-white bg-clip-border hover:scale-110">
              <img src={item.img} alt={item.name} className=" " />{" "}
              {/* Set image size */}
            </div>
            <div className="p-4 text-center">
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

export default TrendingProduct;
