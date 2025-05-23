import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router';

const ShowService = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("/public/sevice.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="py-5">
        <h1 className="text-green-500 text-bold text-xl text-center mt-6">
          --CLEANING SERVICE--
        </h1>
        <h1 className="text-[#013E43] text-bold text-3xl font-bold md:text-3xl text-center">
          Our Excellent Service
        </h1>

        <div className="grid md:grid-cols-4 gap-4 container mx-auto mt-8">
          {data.map(service => (
            <div className="hover:shadow-xl border border-gray-300  rounded-md shadow-black/10 cursor-pointer  duration-200" key={service.i}>
              <img className="w-full h-[200px] rounded-t-md " src={service.image} alt="" />
              <div className="p-4">
                <p className="mt-2 text-sm font-semibold">{service.subtitle}</p>
                <h1 className=" text-xl my-1 font-bold text-green-600">{service.title}</h1>
                <p>{service.description}</p>

                <div className="flex justify-between mt-2">
                  <p className="line-through text-red-400">BDT: 3000</p>
                  <p className="text-lg font-bold">BDT: {service.price}</p>
                </div>
                <hr className='my-3' />

                <Link to="/service_Details">
                  <input className='bg-green-600 hover:bg-green-950 duration-200 w-full mx-auto text-sm text-white p-2 rounded-full' type="button" value="Get Service" />
                </Link>


              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowService;