import React from 'react';
import { MdCleaningServices } from "react-icons/md";


const CleanningAll = () => {
    return (
        <div>
            <h1 className='text-green-600 font-bold'>ALL SERVICESS</h1>
            <div className='bg-gradient-to-r from-sky-300 to-orange-400 p-10 text-center rounded-md'>
                <div className='flex text-center items-center text-white justify-center'>
                    <MdCleaningServices className='text-3xl' />
                    <p className='text-4xl font-bold mb-3'>135+</p>
                </div>
                <h1 className='text-black font-bold'>Service</h1>
            </div>


            <div>
                <table className='w-full mt-4'>
                    <thead className='bg-sky-300 mb-2'>
                        <tr className=''>
                            <th className='text-left text-lg font-semibold px-3 py-1'>SL</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>IMAGE</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>NAME</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>DESCRIPTION</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>PRICE</th>
                            <th className='text-left text-lg font-semibold px-3 py-1'>ACTION</th>

                        </tr>
                    </thead>

                    <tbody className='bg-gray-300 my-5'>
                        <tr className=''>
                            <td className='px-3 py-2'>1</td>
                            <td className='px-3 py-2'>Images</td>
                            <td className='px-3 py-2'>Home clean service</td>
                            <td className='px-3 py-2'>Home Clean service for all</td>
                            <td className='px-3 py-2'>BDT 2700</td>
                            <td className='px-3 py-2'>Approved</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CleanningAll;