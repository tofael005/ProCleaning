import React from 'react';
import about from "../assets/product/About.jpeg"
import { MdOutlineCleaningServices } from "react-icons/md";
import { SiCcleaner } from "react-icons/si";
import logo from "../assets/product/pro8.jpeg"
import { Link } from 'react-router';

const About = () => {
    return (
        <div className='max-w-[1100px] mx-auto px-2 mt-4'>

            <div className='flex md:flex-row flex-col gap-5'>
                <img className='w-[550px] h-[500px] rounded-md' src={about} alt="" />

                <div className=''>
                    <h1 className='mt-5 font-extrabold text-green-600'>---ABOUT CLEANING---</h1>

                    <p className='text-4xl font-extrabold my-5'>Our Cleaning <span className='text-green-600'>Agency</span> For Your City</p>

                    <p className='my-5'>When you work Angeles House Cleaners Referal Agency cleaning breathe easy because your home will soon</p>

                    <div className='flex gap-6 my-9'>
                        <div className=''>
                            <SiCcleaner className='text-6xl text-green-600' />
                            <h1 className='my-4 font-bold'>House Cleaning</h1>
                            <p>leaning machine your Ultrasonic parts cleaning dioxide</p>
                        </div>
                        <div className=''>
                            <MdOutlineCleaningServices className='text-6xl text-green-600' />
                            <h1 className='my-4 font-bold'>Living Room Cleaning</h1>
                            <p>leaning machine your Ultrasonic parts cleaning dioxide</p>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <Link to="/contact">
                            <button className='bg-green-600 px-7 rounded-full text-white hover:bg-green-950 duration-200 py-5 text-sm'>Book Service</button>
                        </Link>

                        <div className='flex gap-2 items-center'>
                            <img className='w-[60px] h-[60px] rounded-full' src={logo} alt="" />
                            <div>
                                <h1 className='font-bold text-xl'>Mayaboti</h1>
                                <p className='text-sm'>Co-founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div>
                    <p>---ABOUT CLEANING</p>
                    <p>Excellent Service
                        cleaning</p>
                </div>
            </div>
        </div>
    );
};

export default About;