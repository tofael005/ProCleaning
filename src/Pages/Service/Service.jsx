import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { IoBed } from "react-icons/io5";

const Service = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("../../../public/homeService.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);



  return (
    <div className="mt-[80px]">
      <h1 className="text-green-500 text-bold text-xl text-center mt-6">
        --CLEANING SERVICE--
      </h1>
      <h1 className="text-[#013E43] text-bold text-3xl font-bold md:text-3xl text-center">
        Our Excellent Service
      </h1>

      <div className="grid md:grid-cols-4 gap-3 container mx-auto mt-8">
        {data.map(post => (
          <div className="hover:shadow-xl border border-gray-300  rounded-md shadow-black/10 cursor-pointer  duration-200" key={post.i}>
            <img className="w-full h-[200px] rounded-t-md " src={post.image} alt="" />
            <div className="p-4">
              <p className="mt-2 text-sm font-semibold">{post.subtitle}</p>
              <h1 className=" text-xl my-1 font-bold text-green-600">{post.title}</h1>
              <p>{post.description}</p>
            </div>
            
          </div>
        ))}
      </div>

      <Link to="/showService">
        <button
          className=" bg-green-600 hover:bg-green-950 duration-200 px-9 py-2 block mx-auto my-4 text-white text-sm  rounded-full">
          Show More
        </button>
      </Link>
    </div>
  );
};

export default Service;

