import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/Exclusive-logo-header.png';
import { CiSearch } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiShoppingCart } from 'react-icons/fi';

const Header: React.FC = () => {
  return (
    <header className=" mx-auto w-full py-4 bg-white text-black">
      <div className=" container flex items-center justify-between pt-8 ">
        <Image src={logo} alt="Logo" />
        <div className=" flex gap-14">
          <Link href={'/'}>Home</Link>
          <Link href={'/'}> Contact</Link>
          <Link href={'/'}>About</Link>
          <Link href={'/login'}>Sign Up</Link>
        </div>

        <div className="relative flex items-center">
          <input className=' w-64 h-10 bg-gray-200 rounded text-sm  placeholder:pl-3 ' type="text" placeholder="What are you looking for?" />
          <span className=' absolute right-2 top-2 text-2xl'>
            <CiSearch />
          </span>
        </div>
        <div className=" flex gap-4 text-3xl">
          <span>
            {' '}
            <IoMdHeartEmpty />
          </span>

          <span>
            <FiShoppingCart />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
