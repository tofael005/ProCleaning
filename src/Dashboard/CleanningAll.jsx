import React from 'react';
import { MdCleaningServices } from "react-icons/md";
import serv2 from "../assets/product/pro1.webp"
import serv1 from "../assets/product/pro2.jpg"
import serv3 from "../assets/product/pro3.jpg"
import serv4 from "../assets/product/pro4.jpg"


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
                        <tr className='border-b-2'>
                            <td className='px-3 py-2'>1</td>
                            <td className='px-3 py-2 rounded-md'><img src={serv1} alt="" /></td>
                            <td className='px-3 py-2'>BED & MATTRES</td>
                            <td className='px-3 py-2'>Home Clean service for all</td>
                            <td className='px-3 py-2'>BDT 2500</td>
                            <td className='px-3 py-2 text-green-600 font-bold'>Approved</td>
                        </tr>

                        <tr className='border-b-2'>
                            <td className='px-3 py-2'>2</td>
                            <td className='px-3 py-2 w-[100px] rounded-md'><img src={serv2} alt="" /></td>
                            <td className='px-3 py-2'>KITCHEN CLEAN</td>
                            <td className='px-3 py-2'>Kitchen Clean service for all</td>
                            <td className='px-3 py-2'>BDT 2700</td>
                            <td className='px-3 py-2 text-green-600 font-bold'>Approved</td>
                        </tr>

                        <tr className='border-b-2'>
                            <td className='px-3 py-2'>3</td>
                            <td className='px-3 py-2 w-[100px] rounded-md'><img src={serv3} alt="" /></td>
                            <td className='px-3 py-2'>HOUSE CLEAN</td>
                            <td className='px-3 py-2'>aweep & mopsd vacuum floor House</td>
                            <td className='px-3 py-2'>BDT 2700</td>
                            <td className='px-3 py-2 text-green-600 font-bold'>Approved</td>
                        </tr>

                        <tr className='border-b-2'>
                            <td className='px-3 py-2'>4</td>
                            <td className='px-3 py-2 w-[100px] rounded-md'><img src={serv4} alt="" /></td>
                            <td className='px-3 py-2'>OFFICE CLEAN</td>
                            <td className='px-3 py-2'>aweep & mopsd vacuum floor House</td>
                            <td className='px-3 py-2'>BDT 2700</td>
                            <td className='px-3 py-2 text-green-600 font-bold'>Approved</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CleanningAll;