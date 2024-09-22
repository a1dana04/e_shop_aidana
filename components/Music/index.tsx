import Image from 'next/image';
import React from 'react';
import music from '@/public/assets/music1.png';

const Music = () => {
  return (
    <div className="container ">
      <div className=" w-full  h-[29rem] bg-black  py-12 px-12 ">
        <div className=" flex text-white gap-20">
          <div>
            <p className="text-green-400 mb-5">Categories</p>
            <h1
              className="text-5xl font-bold leading-tight mb-8"
            >
              {' '}
              Enhance Your <br /> Music Experience
            </h1>
            <div className=" flex gap-5 mb-8 ">
              <div className=" w-20 h-20 bg-white  rounded-full flex justify-center items-center flex-col">
                <h1 className="text-sm text-black font-bold">23</h1>
                <p className="text-sm text-black"> Hours</p>
              </div>
              <div className=" w-20 h-20 bg-white  rounded-full flex justify-center items-center flex-col">
                <h1 className="text-sm text-black font-bold">05</h1>
                <p className="text-sm text-black"> Days</p>
              </div>
              <div className=" w-20 h-20 bg-white  rounded-full flex justify-center items-center flex-col">
                <h1 className="text-sm text-black font-bold">59</h1>
                <p className="text-sm text-black"> Minutes</p>
              </div>
              <div className=" w-20 h-20 bg-white  rounded-full flex justify-center items-center flex-col">
                <h1 className="text-sm text-black font-bold">35</h1>
                <p className="text-sm text-black"> Seconds</p>
              </div>
            </div>

            <button className=" py-4  px-14  bg-green-500 rounded">
              {' '}
              Buy Now!
            </button>
          </div>

          <div className="">
            <Image src={music} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
