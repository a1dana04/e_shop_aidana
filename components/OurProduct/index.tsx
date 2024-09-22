import React from 'react';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const OurProducts = () => {
    return (
        <div className='container'>
            <div className='mt-20'>
            <div className=" flex items-center gap-5">
          <div className=" w-8 h-16 bg-red-500  rounded  "></div>
          <span className="text-red-500">Our Products</span>
        </div>

        <div className=" flex items-center justify-between text-center mb-16">
          <h1 className="text-black text-4xl font-semibold mt-8">
          Explore Our Products
          </h1>

          <div className=" flex  gap-4 ">
            <span className=" flex items-center justify-center flex-col  w-10 h-10 rounded-full bg-gray-200 text-black  text-xl">
            <GoArrowLeft />
            </span>
            <span className="flex items-center justify-center flex-col  w-10 h-10 rounded-full bg-gray-200 text-black text-xl">
            <GoArrowRight />
            </span>
          </div>
        </div>
            </div>
            
        </div>
    );
};

export default OurProducts;