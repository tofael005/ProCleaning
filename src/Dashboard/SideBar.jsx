import React from 'react';
import { Link } from 'react-router';
import { MdSpaceDashboard, MdLocalGroceryStore, MdTouchApp } from "react-icons/md";
import { SiCcleaner } from "react-icons/si";
import { LuCircleDollarSign } from "react-icons/lu";
import { IoSettingsSharp } from "react-icons/io5";




const SideBar = () => {
    return (
        <div className='p-3'>
            <Link to="">
                <div className='flex gap-2 items-center px-4'>
                    <h1 className='text-2xl font-bold'>Pro Cleaning</h1>
                </div>
            </Link>

            <Link to="dashboard">
                <div className='mt-5 flex gap-3 items-center px-4 py-2 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>
                    <MdSpaceDashboard />
                    <h1 >Dashboard</h1>
                </div>
            </Link>

            <Link to="service_order">
                <div className='mt-1 flex gap-3 items-center px-4 py-2 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>
                    <MdLocalGroceryStore />
                    <h1 >Order</h1>
                </div>
            </Link>

            <Link to="cleaning_all">
                <div className='mt-1 flex gap-3 items-center px-4 py-2 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>
                    <SiCcleaner />
                    <h1 >Service</h1>
                </div>
            </Link>

            <Link to="approve_customer">
                <div className='mt-1 flex gap-3 items-center px-4 py-2 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>
                    <MdTouchApp />
                    <h1 >Customer</h1>
                </div>
            </Link>

            <Link to="total_earning">
                <div className='mt-1 flex gap-3 items-center px-4 py-2 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>
                    <LuCircleDollarSign />
                    <h1 >Earning</h1>
                </div>
            </Link>

            <Link to="settings">
                <div className='mt-1 flex gap-3 items-center px-4 py-2 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>
                    <IoSettingsSharp />
                    <h1 >Settings</h1>
                </div>
            </Link>





            <Link to="/">
                <button className='px-4 w-full mt-[40vh] py-2 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>Back To Home</button>
            </Link>

        </div>
    );
};

export default SideBar;