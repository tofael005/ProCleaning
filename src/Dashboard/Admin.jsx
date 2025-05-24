import React from 'react';
import { MdCleaningServices } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Chart from './Chart';
import { Link } from 'react-router';

const Admin = () => {
    return (
        <div>
            <div className='flex justify-between mb-2'>
                <h1 className='text-green-600 font-bold'>DASHBOARD</h1>
                <Link to="/" className='px-4 py-2 text-white bg-green-600 font-bold rounded-full hover:bg-green-950 duration-200'>Sign out</Link>
            </div>
            <div className='grid md:grid-cols-4 gap-3 text-white'>
                <div className='bg-gradient-to-r from-sky-300 to-indigo-400 p-10 text-center rounded-md'>
                    <div className='flex gap-2 text-center items-center text-white justify-center'>
                        <p className='text-4xl font-bold mb-3'>$1835</p>
                    </div>
                    <h1 className='text-black font-bold'>Total Earning</h1>
                </div>
                <div className='bg-gradient-to-r from-sky-300 to-orange-400 p-10 text-center rounded-md'>
                    <div className='flex text-center items-center text-white justify-center'>
                        <MdCleaningServices className='text-3xl' />
                        <p className='text-4xl font-bold mb-3'>135+</p>
                    </div>
                    <h1 className='text-black font-bold'>Service</h1>
                </div>

                <div className='bg-gradient-to-r from-sky-300 to-green-400 p-10 text-center rounded-md'>
                    <div className='flex gap-1 text-center items-center text-white justify-center'>
                        <CgProfile className='text-3xl' />
                        <p className='text-4xl font-bold mb-3'>450+</p>
                    </div>
                    <h1 className='text-black font-bold'>Order</h1>
                </div>

                <div className='bg-gradient-to-r from-sky-300 to-green-400 p-10 text-center rounded-md'>
                    <div className='flex gap-1 text-center items-center text-white justify-center'>
                        <CgProfile className='text-3xl' />
                        <p className='text-4xl font-bold mb-3'>250+</p>
                    </div>
                    <h1 className='text-black font-bold'>Client</h1>
                </div>
            </div>

            <Chart />

        </div>
    );
};

export default Admin;