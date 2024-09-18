import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import Image from 'next/image';
import google from '@/public/assets/google-footer.png';
import appf from '@/public/assets/appstore-footer.png';
import qcode from '@/public/assets/Qrcode 1.png';
import { RiFacebookLine } from "react-icons/ri";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { PiTelegramLogo } from "react-icons/pi";
import { LuSendHorizonal } from "react-icons/lu";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-black text-white w-full py-4   ">
      <div className=" container mx-auto flex  justify-between pt-20 pb-20">
        <div className=" ">
          <h4 className='text-2xl font-bold mb-4'>Exclusive</h4>
          <h5 className=' text-xl mb-4'>Subscribe</h5>
          <p className=' mb-4'>Get 10% off your first order</p>
         <div className='relative'>
         <input className='p-2 bg-transparent border-[rgba(250, 250, 250, 1)] border-[1.5px] w-full rounded pl-4 pr-8' type="text" placeholder='Enter your email' />
          <span  className=' absolute top-3 left-[190px] text-xl'>
          <LuSendHorizonal />
        
          </span>
         </div>
        </div>
        <div className="">
          <h5 className='text-xl mb-4'>Support</h5>
          <p className='mb-4'>
            111 Bijoy sarani, Dhaka,
            <br />
            DH 1515, Bangladesh.
          </p>
          <p className='mb-4'>exclusive@gmail.com</p>
          <p className='mb-4'>+88015-88888-9999</p>
        </div>

        <div className="">
          <h5 className='text-xl mb-4'>Account</h5>
          <p className='mb-4'>My Account</p>
          <p className='mb-4'>Login / Register</p>
          <p className='mb-4'>Cart</p>
          <p className='mb-4'>Wishlist</p>
          <p >Shop</p>
        </div>
        <div className="">
          <h5 className='text-xl mb-4'>Quick Link</h5>
          <p className='mb-4'>Privacy Policy</p>
          <p className='mb-4'>Terms Of Use</p>
          <p className='mb-4'>FAQ</p>
          <p >Contact</p>
        </div>
        <div className="">
          <h5 className='text-xl mb-4'> Download App</h5>
          <p className='mb-4'>Save $3 with App New User Only</p>
          <div className=" flex gap-4">
            <Image src={qcode} alt="img" />
            <div className="">
              <Image className='pb-4' src={google} alt="img" />
              <div className="">
                <Image src={appf} alt="img" />
              </div>
            </div>
          </div>
         <div className=' flex gap-8 text-2xl mt-4'>
            <span><RiFacebookLine /></span>
            <span><TfiTwitter /></span>
            <span><FaInstagram /></span>
            <span><RiLinkedinLine />
            </span>
         </div>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
