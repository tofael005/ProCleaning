import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner2 from "../assets/product/banner.webp"
import banner3 from "../assets/product/banner2.jpg"
import banner4 from "../assets/product/banner4.jpg"

import { Link } from 'react-router';

const Banner = () => {
    return (
        <div>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper md:h-[80vh]"
            >
                <SwiperSlide>
                    <div >
                        <img className='object-cover md:h-[600px] h-[250px] md:w-full relativen' src={banner3} alt="" />
                        <div className='absolute md:w-full md:h-full bg-gradient-to-r from-green-950 via-black-100 top-0 w-full h-full'>
                            <h1 className='md:text-4xl md:left-[70px] text-lg mt-[40px] md:mt-[150px] text-gray-200 left-[20px] absolute'>100% Satisfaction</h1>
                            <hr className='md:left-[70px] w-[200px] left-[20px] mt-[80px] md:w-[380px] md:mt-[220px] absolute' />
                            <p className='md:text-5xl left-[20px] md:left-[70px] mt-[90px] text-lg absolute md:mt-[240px] font-extrabold text-orange-300'>ProCleaning Solutions</p>
                            <p className='md:left-[70px] mt-[120px] text-sm left-[20px] absolute md:mt-[310px] text-gray-200'>always been so professional in handling our teams.</p>

                            <Link to="/service">
                                <button className='md:left-[70px] left-[20px] bg-green-600 md:px-8 px-5 py-3 md:py-3 mt-[155px] rounded-full hover:bg-green-700 text-gray-200 duration-300 absolute md:mt-[360px] text-black/60 font-bold hover:text-white'>Get Pricing</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div >
                        <img className='object-cover md:h-[600px] h-[250px] md:w-full relativen' src={banner2} alt="" />
                        <div className='absolute md:w-full md:h-full bg-gradient-to-r from-green-950 via-black-100 top-0 w-full h-full'>
                            <h1 className='md:text-4xl md:left-[70px] text-lg mt-[40px] md:mt-[150px] text-gray-200 left-[20px] absolute'>100% Satisfaction</h1>
                            <hr className='md:left-[70px] w-[200px] left-[20px] mt-[80px] md:w-[380px] md:mt-[220px] absolute' />
                            <p className='md:text-5xl left-[20px] md:left-[70px] mt-[90px] text-lg absolute md:mt-[240px] font-extrabold text-orange-300'>ProCleaning Solutions</p>
                            <p className='md:left-[70px] mt-[120px] text-sm left-[20px] absolute md:mt-[310px] text-gray-200'>always been so professional in handling our teams.</p>

                            <Link to="/service">
                                <button className='md:left-[70px] left-[20px] bg-green-600 md:px-8 px-5 py-3 md:py-3 mt-[155px] rounded-full hover:bg-green-700 text-gray-200 duration-300 absolute md:mt-[360px] text-black/60 font-bold hover:text-white'>Get Pricing</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div >
                        <img className='object-cover md:h-[600px] h-[250px] md:w-full relativen' src={banner4} alt="" />
                        <div className='absolute md:w-full md:h-full bg-gradient-to-r from-green-950 via-black-100 top-0 w-full h-full'>
                            <h1 className='md:text-4xl md:left-[70px] text-lg mt-[40px] md:mt-[150px] text-gray-200 left-[20px] absolute'>100% Satisfaction</h1>
                            <hr className='md:left-[70px] w-[200px] left-[20px] mt-[80px] md:w-[380px] md:mt-[220px] absolute' />
                            <p className='md:text-5xl left-[20px] md:left-[70px] mt-[90px] text-lg absolute md:mt-[240px] font-extrabold text-orange-300'>ProCleaning Solutions</p>
                            <p className='md:left-[70px] mt-[120px] text-sm left-[20px] absolute md:mt-[310px] text-gray-200'>always been so professional in handling our teams.</p>

                            <Link to="/service">
                                <button className='md:left-[70px] left-[20px] bg-green-600 md:px-8 px-5 py-3 md:py-3 mt-[155px] rounded-full hover:bg-green-700 text-gray-200 duration-300 absolute md:mt-[360px] text-black/60 font-bold hover:text-white'>Get Pricing</button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;