import React from 'react';
import ser1 from "@/public/assets/Services1.png"
import ser2 from "@/public/assets/Services2.png"
import ser3 from "@/public/assets/Services3.png"
import Image from 'next/image';

const Customer = () => {
    return (
        <div className='container'>
            <div className=' flex justify-between items-center pt-28 pb-20'>
                <div className=' flex items-center justify-center flex-col'>
                    <Image src={ser1} alt='img' className='mb-4'/>
                    <h1 className='mb-3 font-bold'>FREE AND FAST DELIVERY</h1>
                    <p>Free delivery for all orders over $140</p>

                </div>
                <div className=' flex items-center justify-center flex-col'>
                    <Image src={ser2 } alt='img'  className='mb-4'/>
                    <h1 className='mb-3 font-bold'>24/7 CUSTOMER SERVICE</h1>
                    <p>Friendly 24/7 customer support</p>

                </div>
                <div className=' flex items-center justify-center flex-col'>
                    <Image src={ser3} alt='img'  className='mb-4'/>
                    <h1 className='mb-3 font-bold'>MONEY BACK GUARANTEE</h1>
                    <p>We reurn money within 30 days</p>

                </div>

            </div>
            
        </div>
    );
};

export default Customer;