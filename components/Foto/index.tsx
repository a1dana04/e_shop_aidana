import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import { IoArrowForwardSharp } from 'react-icons/io5';

interface IFakeData {
  id: number;
  name: string;
  logo: string;
  title: string;
  mainImg: string;
}

const fake_data: IFakeData[] = [
  {
    id: 1,
    name: 'iPhone 14 Series',
    logo: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
    title: 'Up to 10% off Voucher',
    mainImg: '/assets/hero-img-banner.png',
  },
  {
    id: 2,
    name: 'iPhone 15 Series',
    logo: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
    title: 'Down to 20% off Voucher',
    mainImg: '/assets/hero-img-banner.png',
  },
  {
    id: 3,
    name: 'iPhone 16 Series',
    logo: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg',
    title: 'Under to 30% off Voucher',
    mainImg: '/assets/hero-img-banner.png',
  },
];

const HeroBanner = () => {
  return (
    <div className="bg-black text-white w-[880px] mt-10 ml-10 h-[350px]">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {fake_data.map((item) => (
          <SwiperSlide key={item.id} className="">
            <div className="flex justify-around items-center px-20 py-8">
              <div className="">
                <div className="flex gap-5 items-center mb-4 ">
                  <img src={item.logo} alt="logo" className="w-14" />
                  <h3 className="text-base text-white">{item.name}</h3>
                </div>
                <h1 className="text-5xl font-semibold mb-4 w-96">{item.title}</h1>
                <button className="flex items-center gap-3 outline-none border-none mt-6 bg-black text-white py-2 px-4 rounded">
                  Shop Now
                  <span>
                    <IoArrowForwardSharp />
                  </span>
                </button>
              </div>
              <Image
                src={item.mainImg}
                alt="Main Image"
                width={500}
                height={300}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroBanner;
