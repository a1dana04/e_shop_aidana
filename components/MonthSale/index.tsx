import React from 'react';

const MonthSale = () => {
  return (
    <div className=" ">
      <div className=" mt-20">
        <div className=" flex items-center gap-5">
          <div className=" w-8 h-16 bg-red-500  rounded  "></div>
          <span className="text-red-500">This Month</span>
        </div>

        <div className=" flex items-center justify-between text-center mb-16">
          <h1 className="text-black text-4xl font-semibold mt-8">
            Best Selling Products
          </h1>

          <div className=" ">
            <button className="  px-12 py-4 rounded bg-red-500 text-white ">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthSale;
