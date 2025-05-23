import React from 'react';
import { CgProfile } from "react-icons/cg";


const ApproveCustomer = () => {
    return (
        <div>
            <h1 className='text-green-600 font-bold'>ALL CUSTOMERS</h1>
            <div className='bg-gradient-to-r from-sky-300 to-green-400 p-10 text-center rounded-md'>
                <div className='flex gap-1 text-center items-center text-white justify-center'>
                    <CgProfile className='text-3xl' />
                    <p className='text-4xl font-bold mb-3'>250+</p>
                </div>
                <h1 className='text-black font-bold'>Client</h1>
            </div>

            
            <div>
                <table className='w-full mt-4'>
                    <thead className='bg-sky-300 mb-2'>
                        <tr className=''>
                            <th className='text-left text-lg font-semibold px-3 py-1'>SL</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>NAME</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>EMAIL</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>NUMBER</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>LOCATION</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>ACTION</th>

                        </tr>
                    </thead>

                    <tbody className='bg-gray-300 my-5'>
                        <tr className=''>
                            <td className='px-3 py-2'>1</td>
                            <td className='px-3 py-2'>Rup Nila</td>
                            <td className='px-3 py-2'>rup@nila.com</td>
                            <td className='px-3 py-2'>01966406795</td>
                            <td className='px-3 py-2'>Bashundhara</td>
                            <td className='px-3 py-2'>Done</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApproveCustomer;