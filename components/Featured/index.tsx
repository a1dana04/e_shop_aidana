import React from 'react';

const Featured = () => {
    return (
        <div className=''>
             <div className=" flex items-center gap-5">
          <div className=" w-8 h-16 bg-red-500  rounded  "></div>
          <span className="text-red-500">Featured</span>
        </div>

        <div className=" flex items-center justify-between text-center mb-16">
          <h1 className="text-black text-4xl font-semibold mt-8">
          New Arrival
          </h1>
            
        </div>
        </div>
    );
};

export default Featured;