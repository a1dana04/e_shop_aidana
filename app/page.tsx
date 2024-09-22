'use client';
import { Product } from '../types/common';
import Header from '@/components/Header';
import Image from 'next/image';
import { productsAPI } from '@/lib/product';
import { formatCurrency } from '@/utils/formatCurrency';
import Reklama from '@/components/Reklama';
import Footer from '@/components/Footer';
import Category from '@/components/Category';
import CategoryList from '@/components/Category/CategoryList';
import Foto from '@/components/Foto';

import { useEffect, useState } from 'react';
import Hero from '@/components/Hero';
import FlashSales from '@/components/FlashSales';
import SalesProduct from '@/components/FlashSales/SalesProduct';
import Browse from '@/components/Browse';
import Music from '@/components/Music';
import Recomen from '@/components/Recomen';

import BestSeling from '@/components/BestSeling';


import { IoIosHeart } from 'react-icons/io';
import { IoEyeSharp } from 'react-icons/io5';
import Star from '@/components/FlashSales/Star';
import OurProducts from '@/components/OurProduct';
import Featured from '@/components/Featured';
import Arrival from '@/components/Featured/Arrival';
import NewCardArrival from '@/components/NewCardArrival';


const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    productsAPI.getAll().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Reklama />
      <Header />

      <Hero />
      <Recomen />
      <Browse />
      <BestSeling />
      <Music />
      <OurProducts/>
     


    <div className=' container'>
 <ul className="flex gap-10 items-center flex-wrap  mt-8">
        {products.map((product) => (
          <li
            key={product.id}
            className="h-[400px] relative group" 
          >
            <div className="mb-4 group-hover:shadow-lg rounded-lg border px-16 py-11 border-gray-300 bg-gray-100 transition-shadow duration-300"> 
             
              <div className="absolute top-2 left-2 w-14 h-6 text-sm bg-red-500 flex justify-center items-center rounded text-white">
                <p>-40%</p>
              </div>
              <div className="flex gap-2 flex-col absolute top-2 right-4">
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center flex-col">
                  <IoIosHeart />
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center flex-col">
                  <IoEyeSharp />
                </div>
              </div>

              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="max-w-32 h-32"
              />
            </div>
            
           
            <h1
              className="absolute top-48 rounded-b px-6 flex items-center justify-center w-full h-10 text-white bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              Add To Cart
            </h1>

            <h3 className="mb-2">{product.title.slice(0, 10)}</h3>
            <p className=" text-sm opacity-70 mb-2">
              {formatCurrency(product.price)}
            </p>
            <div>
              <Star/>
            </div>
        
          </li>
        ))}
      </ul>
            
        </div>
        <NewCardArrival/>
        
      <Footer />
    </>
  );
};

export default Home;
