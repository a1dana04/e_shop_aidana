import React from 'react';
import arrival from '@/public/assets/Arrival.png';
import arrival1 from '@/public/assets/Arrival1.png';
import arrival2 from '@/public/assets/Arrival2.png';
import arrival3 from '@/public/assets/Arrival3.png';
import Image from 'next/image';

const Arrival = () => {
  return (
    <div className="">
      <div className=" flex gap-12 text-white relative">
        <div className=" w-[34rem] h-full bg-black pt-[10%]">
          <Image src={arrival} alt="img" className="max-w-full" />
          <div className=" px-10  absolute top-[75%]  ">
            <h1 className="text-2xl mb-2">PlayStation 5</h1>
            <p className="text-sm mb-2">
              Black and White version of the PS5 <br />
              coming out on sale.
            </p>
            <button className="bg-none border-gray-400 border-b-2">
              Shop Now
            </button>
          </div>
        </div>

        <div className="">
          <div className="w-[38rem] h-[18rem] bg-black mb-9   ">
            <Image src={arrival1} alt="img" className="max-w-full ml-28" />
          </div>

          <div className="flex">
            <div className="text-white absolute top-[18%] px-8 ">
              <h1 className="text-2xl mb-2 font-bold">Women’s Collections</h1>
              <p className="text-sm mb-2">
                Featured woman collections that <br />
                give you another vibe.
              </p>
              <button className="bg-none border-gray-400 border-b-2">
                Shop Now
              </button>
            </div>

            <div className=" flex gap-8">
        
                {' '}
                <div className="w-[18rem] h-[19rem] bg-black  flex items-center justify-center  ">
                  <Image src={arrival2} alt="img" className="max-w-full " />

                  <div className="text-white absolute top-[75%]   px-8 ">
              <h1 className="text-2xl mb-2 font-bold">Speakers</h1>
              <p className="text-sm mb-2">
              Amazon wireless speakers
              </p>
              <button className="bg-none border-gray-400 border-b-2">
                Shop Now
              </button>
            </div>
                </div>
                


          
         
                <div className="w-[18rem] h-[19rem] bg-black  flex items-center justify-center ">
                  <Image src={arrival3} alt="img" className="max-w-full " />

                  <div className="text-white absolute top-[75%]  px-8 ">
              <h1 className="text-2xl mb-2 font-bold">Perfume</h1>
              <p className="text-sm mb-2">
              GUCCI INTENSE OUD EDP
              </p>
              <button className="bg-none border-gray-400 border-b-2">
                Shop Now
              </button>
            </div>
                </div>
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
