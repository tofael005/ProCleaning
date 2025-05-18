import React, { useEffect, useState } from "react";
import ShowService from "../ShowService/ShowService";
import { Link } from "react-router";

const Service = () => {
  const [services, setServices] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("../../../public/cleaningServise.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <div className="container mx-auto">
      <h1 className="text-green-500 text-bold text-2xl text-center mt-6">
        --CLEANING SERVICE--
      </h1>
      <h1 className="text-[#013E43] text-bold text-4xl md:text-6xl text-center">
        Our Excellent Service
      </h1>

      <div className="grid md:grid-cols-4 gap-5 md:gap-8 mt-8 mb-6">
        {visibleServices.map((service) => (
          <ShowService service={service} key={service.id} />
        ))}
      </div>

      {/* Show More button only if not all services are shown */}
      
      {!showAll && services.length > 4 && (
        
          <div className="flex justify-center mb-10">
           <Link to="/service">
            <button
              className="w-[200px] h-[50px] bg-green-600 hover:bg-green-500 text-lg rounded-md"
              onClick={() => setShowAll(true)}
            >
              Show More
            </button>
            </Link>
          </div>
        
      )}
     
      
    </div>
  );
};

export default Service;
