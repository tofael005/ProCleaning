import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import logo from '../../../public/vite.png'

const Footer = () => {
    return (
        <footer className="bg-[#063f39] text-white mt-10 md:p-8">
            <div className="container mx-auto px-4 grid md:grid-cols-3 justify-between">
                {/* Left Column */}
                <div>
                    <div className="flex items-center mb-4 mt-7">
                        <img src={logo} className="w-10 h-10 mr-2" />
                        <h1 className="text-3xl font-bold text-white">ProCleaning</h1>
                    </div>
                    <p className="text-gray-300 mt-8 md:mt-16 mb-4">
                        Provide Detailed House Cleaning Sanitizing <br /> Services For Valued Clients.
                    </p>
                    <div className="flex items-center text-lg mb-2">
                        <FaPhoneAlt className="text-green-500 mr-2" />
                        <span className="font-semibold">+1 999 888 666</span>
                    </div>
                    <p className="text-green-500 font-semibold">Call : 24/7</p>
                    <div className="mt-4">
                        <div className="flex gap-3">
                        <p className="text-green-500 mt-1 mb-2">Follow On :</p>
                            <a href="#"><FaFacebookF className="bg-gray-800 p-2 rounded-full w-9 h-9" /></a>
                            <a href="#"><FaLinkedinIn className="bg-gray-800 p-2 rounded-full w-9 h-9" /></a>
                            <a href="#"><FaInstagram className="bg-gray-800 p-2 rounded-full w-9 h-9" /></a>
                        </div>
                    </div>
                </div>

                {/* Middle Column - Useful Links */}
                <div className="md:col-span-1 md:w-[490px] mt-5 md:mt-0">
                    <h2 className="text-xl font-semibold mb-4">Useful Links</h2>

                    <div className='w-[300px] md:w-[410px] h-1 bg-[#164E53] mb-7'><div className='w-[90px] md:[100px] h-1 bg-green-500'></div></div>

                    <div className="flex gap-6 md:gap-16  text-gray-300">
                        <ul className="space-y-2 ">
                            <li><a href="#"><span className='text-yellow-500'>››</span> Help Center</a></li>
                            <li><a href="#"><span className='text-yellow-500'>››</span> About Us</a></li>
                            <li><a href="#"><span className='text-yellow-500'>››</span> Contact Us</a></li>
                            <li><a href="#"><span className='text-yellow-500'>››</span> Become A Cleaner</a></li>
                            <li><a href="#"><span className='text-yellow-500'>››</span> Blog</a></li>
                        </ul>
                        <ul className="space-y-2">
                            <li><a href="#"><span className='text-yellow-500'>››</span> Apartment Cleaning</a></li>
                            <li><a href="#"><span className='text-yellow-500'>››</span> One-Time Clean</a></li>
                            <li><a href="#"><span className='text-yellow-500'>››</span> Shield Glass</a></li>
                            <li><a href="#"><span className='text-yellow-500'>››</span> Vacation Rental Cleaning</a></li>
                        </ul>
                    </div>
                </div>

                {/* Right Column - Instagram */}
                <div className='md:w-[350px] md:ml-32 mt-5 md:mt-0'>
                    <h2 className="text-xl font-semibold mb-4">Instagram</h2>
                    <div className='w-[300px] h-1 bg-[#164E53] mb-7'><div className='w-[100px] h-1 bg-green-500'></div></div>
                    <div className="grid grid-cols-3 gap-2">
                        {["1", "2", "3", "4", "5", "6"].map((img, index) => (
                            <img
                                key={index}
                                src={`/images/insta${img}.jpg`}
                                alt={`Instagram ${img}`}
                                className="rounded-md border-2 border-green-500 object-cover w-full h-[80px]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
