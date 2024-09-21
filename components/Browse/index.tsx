import React from 'react';
import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { BsSmartwatch } from 'react-icons/bs';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { CiHeadphones } from "react-icons/ci";
import { MdOutlineVideogameAsset } from "react-icons/md";
const Browse = () => {
  return (
    <div className=" container">
      <div className=" flex items-center gap-5 mt-28">
        <div className=" w-8 h-16 bg-red-500  rounded  "></div>
        <span className="text-red-500">Categories</span>
      </div>
      <h1 className="text-black text-4xl font-semibold mt-8 mb-28">
        Browse By Category
      </h1>

      <div className=" flex items-center gap-10  mb-20">
        <div className=" flex items-center  justify-center flex-col  w-40 h-40  rounded border-2 border-solid border-gray-300 hover:bg-red-400  hover:text-white ">
          <h1 className=' text-6xl mb-6' >
            <MdOutlinePhoneAndroid />
          </h1>
          <div>    <p >Gameing</p></div>
        </div>

        <div className="flex items-center  justify-center flex-col   w-40 h-40 rounded  border-2 border-solid border-gray-300  hover:bg-red-400  hover:text-white ">
          <h1 className=' text-6xl mb-6'>
            <RiComputerLine />
          </h1>
          <div>    <p >Gameing</p></div>
        </div>
        <div className="flex items-center  justify-center flex-col   w-40 h-40  rounded border-2 border-solid border-gray-300 hover:bg-red-400  hover:text-white ">
          <h1 className=' text-6xl mb-6'>
            <BsSmartwatch />
          </h1>
          <div>    <p >Gameing</p></div>
        </div>

        <div className="flex items-center  justify-center flex-col  w-40 h-40  rounded border-2 border-solid border-gray-300  hover:bg-red-400  hover:text-white ">
          <h1 className=' text-6xl mb-6'>
            <MdOutlinePhotoCamera />
          </h1>
          <div>    <p >Gameing</p></div>
        </div>

        <div className="flex items-center  justify-center flex-col  w-40 h-40  rounded border-2 border-solid border-gray-300  hover:bg-red-400  hover:text-white ">
          <h1 className=' text-6xl mb-6'>
            < CiHeadphones />
          </h1>
          <div>    <p >Gameing</p></div>
        </div>

        <div className="flex items-center  justify-center flex-col   w-40 h-40 rounded border-2 border-solid border-gray-300 hover:bg-red-400  hover:text-white ">
          <h1 className=' text-6xl mb-6'>
            <MdOutlineVideogameAsset />
          </h1>
      <div>    <p >Gameing</p></div>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Browse;
