import React, { useEffect, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import Swal from 'sweetalert2';
import axios from 'axios';
import { MdDeleteForever } from 'react-icons/md';

const ServiceOrder = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/userData")
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const deleteHandle = (id) => {
        axios.delete(`http://localhost:8000/userData/${id}`)
        .then(res => {console.log(res)
        })
        .catch(err => console.log(err));
        Swal.fire({
            title: 'Deleted',
            icon: 'success',
            confirmButtonText: 'Thanks'
        })

    }  

    let count = 1;
    return (
        <div>
            <h1 className='text-green-600 font-bold'>CUSTOMER ORDER</h1>
            <div className='bg-gradient-to-r from-sky-300 to-green-400 p-10 text-center rounded-md'>
                <div className='flex gap-1 text-center items-center text-white justify-center'>
                    <CgProfile className='text-3xl' />
                    <p className='text-4xl font-bold mb-3'>450+</p>
                </div>
                <h1 className='text-black font-bold'>Order</h1>
            </div>

            <div>
                <table className="w-[97%] table-auto mx-auto rounded-md mt-5 mb-6">
                    <thead className="bg-[#535C91] rounded-md">
                        <tr className="">
                            <th className="py-3 border-white border-collapse border-2 text-white">SL</th>
                            <th className="py-3 border-white border-collapse border-2 text-white">NAME</th>
                            <th className="py-3 border-white border-collapse border-2 text-white">EMAIL</th>
                            <th className="py-3 border-white border-collapse border-2 text-white">NUMBER</th>
                            <th className="py-3 border-white border-collapse border-2 text-white">PRICE</th>
                            <th className="py-3 border-white border-collapse border-2 text-white">MASSAGE</th>
                            <th className="py-3 border-white border-collapse border-2 text-white">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-light">
                        {
                            data.map((data, index) => {
                                return <tr key={index}>
                                    <td className="border-2 border-white text-center p-2 bg-gray-200 font-semibold">{count++}</td>
                                    <td className="border-2 border-white text-center p-2 bg-gray-200 font-semibold">{data.from_name}</td>
                                    <td className="border-2 border-white text-center p-2 bg-gray-200 font-semibold">{data.from_email}</td>
                                    <td className="border-2 border-white text-center p-2 bg-gray-200 font-semibold">{data.from_number}</td>
                                    <td className="border-2 border-white text-center p-2 bg-gray-200 font-semibold">BDT: {data.from_number}</td>
                                    <td className="border-2 border-white text-center p-2 bg-gray-200 font-semibold">{data.from_massage}</td>
                                    <td className="border-2 border-white text-center p-2 bg-gray-200 font-semibold">
                                        <button onClick={() => deleteHandle(data._id)}>
                                            <MdDeleteForever className="text-4xl hover:bg-red-500 p-1 rounded-md hover:text-white duration-300" />
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServiceOrder;