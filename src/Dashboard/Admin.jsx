import React from 'react';
import { MdCleaningServices } from "react-icons/md";
import { FiDollarSign } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Admin = () => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-3 text-white'>
                <div className='bg-gradient-to-r from-sky-300 to-indigo-400 p-10 text-center rounded-md'>
                    <div className='flex gap-2 text-center items-center text-white justify-center'>
                        <FiDollarSign className='text-5xl' />
                        <p className='text-6xl font-bold mb-3'>135</p>
                    </div>
                    <h1 className='text-gray-200'>Total Earning</h1>
                </div>
                <div className='bg-gradient-to-r from-sky-300 to-orange-400 p-10 text-center rounded-md'>
                    <div className='flex gap-2 text-center items-center text-white justify-center'>
                        <MdCleaningServices className='text-5xl' />
                        <p className='text-6xl font-bold mb-3'>135</p>
                    </div>
                    <h1 className='text-gray-200'>Approved Service</h1>
                </div>
                <div className='bg-gradient-to-r from-sky-300 to-green-400 p-10 text-center rounded-md'>
                    <div className='flex gap-2 text-center items-center text-white justify-center'>
                        <CgProfile className='text-5xl' />
                        <p className='text-6xl font-bold mb-3'>135</p>
                    </div>
                    <h1 className='text-gray-200'>Total Client</h1>
                </div>
            </div>


            <div className='border p-2 mt-5'>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;