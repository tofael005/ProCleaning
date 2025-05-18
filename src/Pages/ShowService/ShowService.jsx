import React from "react";

const ShowService = ({ service }) => {
  const { title, category, description, icon, image } = service;
  return (
    <div className="mx-auto border border-transparent hover:border-green-400 transition-all duration-300">
      <div className="bg-white drop-shadow-xl w-[350px] rounded-md \">
        <img className="md:h-[200px] w-full" src={image} alt="" />

        <div className="p-10">
            <div className="flex justify-between ">
          <div>
            <h1 className="text-green-500 font-bold text-lg">{category}</h1>
            <h1 className="text-black text-xl font-bold">{title}</h1>
          </div>

          <div>
            <img className="w-[50px]" src={icon} alt="" />
          </div>
        </div>
        {/*  */}

        <div className="relative mt-8 w-full">
          {/* Dotted line */}
          <hr className="border-t-2 border-dotted border-gray-300 w-full" />
          <div className="absolute top-0 right-0 h-0.5 w-[48px] bg-[#D3D4D9]" />
        </div>
        {/*  */}
        <p className="mt-5 text-gray-600">{description}</p>

        <button className="w-full h-[50px] mx-auto bg-green-500 hover:bg-green-400
        mt-4 rounded-md">Get Service</button>
      </div>
        </div>
    
    </div>
  );
};

export default ShowService;
