import React from 'react';

const Reklama: React.FC = () => {
  return (
    <header className="w-full py-4 bg-#000000 text-white ">
      <div className="container mx-auto flex justify-end  gap-64 ">
        <div className=" flex items-center justify-end  ">
          <p className="text-white text-center font-normal text-sm  ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a className=" outline-none underline font-bold">ShopNow</a>
          </p>
          
        </div>
        <div className="">
          <select className=" p-2 bg-transparent outline-none ">
            <option>English</option>
            <option>Russian</option>
            <option>Kyrgyz</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Reklama;
