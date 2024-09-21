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
import MonthSale from '@/components/MonthSale';
import BestSeling from '@/components/BestSeling';

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

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <h2 className="text-3xl font-bold">Products</h2>
        </div>

        {loading ? (
          <div className="flex items-center justify-center w-full h-screen">
            <p className="text-xl text-blue-500">Loading...</p>
          </div>
        ) : (
          <ul className="grid gap-8 w-full max-w-5xl lg:grid-cols-4 lg:text-left mt-8">
            {products.map((product) => (
              <li
                key={product.id}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="mb-4  "
                />
                <h3 className="mb-2 text-2xl font-semibold">{product.title}</h3>
                <p className="m-0 text-sm opacity-70">
                  {formatCurrency(product.price)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Home;
