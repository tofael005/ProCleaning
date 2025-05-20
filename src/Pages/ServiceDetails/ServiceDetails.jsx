
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams(); 
  const data = useLoaderData();

  const service = data.find((item) => item.id === id || item.id === Number(id));

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
     <div className="flex flex-col md:flex-row bg-[#0a2f2f] text-white min-h-screen">
        <div><img className="h-full w-[500px]" src={service.image} alt="" /></div>
      {/* Left: Booking Form */}
      <div className="bg-[#0F9C3C] p-14 md:p-6 w-full h-[510px] md:w-[450px] flex flex-col justify-center md:absolute md:ml-[272px] md:mt-[138px]">
        <h3 className="text-sm text-white uppercase md:mb-2  md:mt-1 ">Cleaning Service</h3>
        <h2 className="text-3xl font-bold mb-6">Book Your Cleaning?</h2>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="md:p-3 p-2 rounded text-black"
            />
            <input
              type="email"
              placeholder="Email *"
              className="md:p-3 p-2 rounded text-black"
            />
            <input
              type="text"
              placeholder="Phone *"
              className="md:p-3 p-2 rounded text-black"
            />
            <select className="p-2 md:p-3 rounded text-black">
              <option>Type of service</option>
              <option>Home Cleaning</option>
              <option>Office Cleaning</option>
              <option>Window Cleaning</option>
              <option>Bathroom Cleaning</option>
              <option>BED & MATTRES Cleaning</option>
              <option>HOME SERVICE</option>
            </select>
          </div>

          <textarea
            rows="4"
            placeholder="Your message"
            className="w-full p-2 md:p-3 rounded text-black"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-[#0a2f2f] hover:bg-[#064d4d] text-white py-3 rounded font-semibold"
          >
            SEE MY INSTANT QUOTE
          </button>
        </form>
      </div>

      {/* Right: Testimonial */}
      <div className="p-8 md:ml-48 md:w-[800px] flex flex-col justify-center md:mt-4">
        <div className="p-10">
            <p className="text-green-400 uppercase text-sm">{service.subtitle}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
        <p className="text-gray-300 mb-6 max-w-xl">
         {service.description}
        </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-[#0B3C43] md:h-[250px] p-10 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={service.icon}
              alt="user"
              className="w-14 h-14 rounded-full border-2 border-green-500"
            />
            <div>
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <p className="text-green-400 text-sm">★★★★★</p>
            </div>
          </div>
          <p className="text-gray-300 italic">
            “When You Work With Los Angeles House Cleaners Refal Agen Cleaning Room Breathe Easy
            Because Your Home Will Soon When You Work With Angeles House Cleaners Referral Agency
            Cleaning Breathe”
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center mt-2 gap-6">
          <button className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full text-white text-xl flex items-center justify-center">
            ←
          </button>
          <button className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full text-white text-xl flex items-center justify-center">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
