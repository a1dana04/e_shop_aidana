import React from 'react';

const FlashSales = () => {
  return (
    <div className=" pt-40">
      <div className=" flex items-center gap-5">
        <div className=" w-8 h-16 bg-red-500  rounded  "></div>
        <span className="text-red-500">Today’s</span>
      </div>

      <div className=" flex items-center   gap-32">
        <div>
          <h1 className="text-black text-4xl font-semibold mt-8">
            Flash Sales
          </h1>
        </div>
        <div className=" flex   gap-5">
          <div className="">
            <p>Days</p>
            <span className="text-black text-4xl font-semibold">03</span>
            <span className="text-red-500 text-4xl font-semibold text-center ml-3 ">
              {' '}
              :
            </span>
          </div>

          <div>
            <p>Hours</p>
            <span className="text-black text-4xl font-semibold">23</span>
            <span className="text-red-500 text-4xl font-semibold text-center ml-3 ">
              {' '}
              :
            </span>
          </div>

          <div>
            <p>Minutes</p>
            <span className="text-black text-4xl font-semibold">19</span>
            <span className="text-red-500 text-4xl font-semibold text-center ml-3 ">
              {' '}
              :
            </span>
          </div>

          <div>
            <p>Seconds</p>
            <span className="text-black text-4xl font-semibold">56</span>
          </div>
        </div>
      </div>

      




    </div>
  );
};

export default FlashSales;
