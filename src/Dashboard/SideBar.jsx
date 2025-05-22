import React from 'react';
import { Link } from 'react-router';


const SideBar = () => {
    return (
        <div className='p-3'>
            <Link to="dashboard">
                <h1 className='text-2xl font-bold'>Pro Cleaning</h1>
            </Link>
            <Link to="dashboard">
                <h1 className='mt-5 px-4 py-2 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>Dashboard</h1>
            </Link>
            <Link to="service_order">
                <h1 className='px-4 py-2 mt-1 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>Cleaning Order</h1>
            </Link>
            <Link to="cleaning_all">
                <h1 className='px-4 py-2 mt-1 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>Cleaning All</h1>
            </Link>
            <Link to="approve_customer">
                <h1 className='px-4 py-2 mt-1 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>Approve Customer</h1>
            </Link>
            <Link to="total_earning">
                <h1 className='px-4 py-2 mt-1 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>Total Earning</h1>
            </Link>
            <Link to="settings">
                <h1 className='px-4 py-2 mt-1 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>Settings</h1>
            </Link>





            <Link to="/">
                <button className='px-4 w-full mt-[40vh] py-2 bg-black/10 hover:bg-sky-600 duration-200 rounded-md'>Back To Home</button>
            </Link>

        </div>
    );
};

export default SideBar;