import React, { useState } from 'react';
import { Link } from 'react-router';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";


import logo from "../assets/logo.png"

const Navbar = () => {
    const [toggle, setToggle] = useState()
    return (
        <div className=''>

            <div className='container mx-auto px-2'>
                <div className='md:flex hidden justify-between py-2 items-center md:text-[12px] md:text-black text-transparent '>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'>
                            <FiPhoneCall className='text-lg text-green-700' />
                            <p>01844 286586</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineEmail className='text-lg text-green-700' />
                            <p>info@procleaning.com</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <h1>Follow us:</h1>
                        <div className='flex items-center text-lg gap-2 text-green-700'>
                            <FaFacebook />
                            <FaInstagramSquare />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>



            <div className='border-b bg-blue-950 text-white'>
                <div className='flex justify-between container mx-auto p-3 items-center '>
                    <Link to="/">
                        <img className='w-[200px]' src={logo} alt="" />
                    </Link>


                    <span className='md:hidden'>
                        {
                            toggle ? <AiOutlineCloseCircle className='text-2xl' onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="text-2xl" onClick={() => setToggle(!toggle)} />
                        }
                    </span>


                    <div className={`flex items-center duration-300 flex-col py-5 md:p-0  bg-opacity-100 top-[72px] text-white bg-black md:bg-transparent w-full text-center md:w-auto md:flex-row md:gap-6 absolute md:static z-50 ${toggle ? "left-0" : "-left-full"}`}>
                        <ul className="flex flex-col md:flex-row md:gap-6 font-semibold items-center">
                            <Link to="/" className='hover:border-b border-green-400 py-2'><li>Home</li></Link>
                            <Link to="/service" className='hover:border-b border-green-400 py-2'><li>Services</li></Link>
                            <Link to="/about" className='hover:border-b border-green-400 py-2'><li>About</li></Link>
                            <Link to="/contact" className='hover:border-b border-green-400 py-2'><li>Contact</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;