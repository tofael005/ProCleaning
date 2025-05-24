import React from 'react';
import { Link } from 'react-router';
import ser1 from "../../assets/product/pro1.webp"
import ser2 from "../../assets/product/pro2.jpg"
import ser3 from "../../assets/product/pro3.jpg"
import ser4 from "../../assets/product/pro4.jpg"
import ser6 from "../../assets/product/pro6.webp"
import ser7 from "../../assets/product/pro7.jpg"
import ser8 from "../../assets/product/pro8.jpeg"

const ShowService = () => {


  return (
    <div>
      <div className="py-5">
        <h1 className="text-green-500 text-bold text-xl text-center mt-6">
          --CLEANING SERVICE--
        </h1>
        <h1 className="text-[#013E43] text-bold text-3xl font-bold md:text-3xl text-center">
          Our Excellent Service
        </h1>


        <div className='grid md:grid-cols-4 gap-3 container mx-auto px-2'>

          <div className='hover:shadow-xl border border-gray-300  rounded-md shadow-black/10 cursor-pointer  duration-200'>
            <img className='w-full h-[200px] rounded-t-md' src={ser1} alt="" />

            <div className='p-4'>
              <h1 className='text-2xl font-bold text-green-600 mb-3'>BED & MATTRES</h1>
              <p>aweep & mopsd vacuum floor House Cleaners.</p>
              <div className='flex my-3 justify-between items-center'>
                <p className='line-through text-red-400'>BDT 3000</p>
                <p className='text-lg font-bold'>BDT 2500</p>
              </div>
              <Link to="/service_Details">
                <input className='bg-green-600 cursor-pointer hover:bg-green-950 duration-200 w-full mx-auto text-sm text-white p-3 rounded-full' type="button" value="Get Service" />
              </Link>
            </div>
          </div>

          <div className='hover:shadow-xl border border-gray-300  rounded-md shadow-black/10 cursor-pointer  duration-200'>
            <img className='w-full h-[200px] rounded-t-md' src={ser2} alt="" />

            <div className='p-4'>
              <h1 className='text-2xl font-bold text-green-600 mb-3'>HOUSE CLEAN</h1>
              <p>aweep & mopsd vacuum floor House Cleaners.</p>
              <div className='flex my-3 justify-between items-center'>
                <p className='line-through text-red-400'>BDT 3000</p>
                <p className='text-lg font-bold'>BDT 2500</p>
              </div>
              <Link to="/service_Details">
                <input className='bg-green-600 cursor-pointer hover:bg-green-950 duration-200 w-full mx-auto text-sm text-white p-3 rounded-full' type="button" value="Get Service" />
              </Link>
            </div>
          </div>

          <div className='hover:shadow-xl border border-gray-300  rounded-md shadow-black/10 cursor-pointer  duration-200'>
            <img className='w-full h-[200px] rounded-t-md' src={ser3} alt="" />

            <div className='p-4'>
              <h1 className='text-2xl font-bold text-green-600 mb-3'>HOME SERVICE</h1>
              <p>aweep & mopsd vacuum floor House Cleaners.</p>
              <div className='flex my-3 justify-between items-center'>
                <p className='line-through text-red-400'>BDT 3000</p>
                <p className='text-lg font-bold'>BDT 2500</p>
              </div>
              <Link to="/service_Details">
                <input className='bg-green-600 cursor-pointer hover:bg-green-950 duration-200 w-full mx-auto text-sm text-white p-3 rounded-full' type="button" value="Get Service" />
              </Link>
            </div>
          </div>

          <div className='hover:shadow-xl border border-gray-300  rounded-md shadow-black/10 cursor-pointer  duration-200'>
            <img className='w-full h-[200px] rounded-t-md' src={ser4} alt="" />

            <div className='p-4'>
              <h1 className='text-2xl font-bold text-green-600 mb-3'>KITCHEN CLEAN</h1>
              <p>aweep & mopsd vacuum floor House Cleaners.</p>
              <div className='flex my-3 justify-between items-center'>
                <p className='line-through text-red-400'>BDT 3500</p>
                <p className='text-lg font-bold'>BDT 2900</p>
              </div>
              <Link to="/service_Details">
                <input className='bg-green-600 cursor-pointer hover:bg-green-950 duration-200 w-full mx-auto text-sm text-white p-3 rounded-full' type="button" value="Get Service" />
              </Link>
            </div>
          </div>

          <div className='hover:shadow-xl border border-gray-300  rounded-md shadow-black/10 cursor-pointer  duration-200'>
            <img className='w-full h-[200px] rounded-t-md' src={ser7} alt="" />

            <div className='p-4'>
              <h1 className='text-2xl font-bold text-green-600 mb-3'>KITCHEN CLEAN</h1>
              <p>aweep & mopsd vacuum floor House Cleaners.</p>
              <div className='flex my-3 justify-between items-center'>
                <p className='line-through text-red-400'>BDT 3500</p>
                <p className='text-lg font-bold'>BDT 2900</p>
              </div>
              <Link to="/service_Details">
                <input className='bg-green-600 cursor-pointer hover:bg-green-950 duration-200 w-full mx-auto text-sm text-white p-3 rounded-full' type="button" value="Get Service" />
              </Link>
            </div>
          </div>

          <div className='hover:shadow-xl border border-gray-300  rounded-md shadow-black/10 cursor-pointer  duration-200'>
            <img className='w-full h-[200px] rounded-t-md' src={ser6} alt="" />

            <div className='p-4'>
              <h1 className='text-2xl font-bold text-green-600 mb-3'>KITCHEN CLEAN</h1>
              <p>aweep & mopsd vacuum floor House Cleaners.</p>
              <div className='flex my-3 justify-between items-center'>
                <p className='line-through text-red-400'>BDT 3500</p>
                <p className='text-lg font-bold'>BDT 2900</p>
              </div>
              <Link to="/service_Details">
                <input className='bg-green-600 cursor-pointer hover:bg-green-950 duration-200 w-full mx-auto text-sm text-white p-3 rounded-full' type="button" value="Get Service" />
              </Link>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
};

export default ShowService;