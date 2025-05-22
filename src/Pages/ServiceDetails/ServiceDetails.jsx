import service from "../../assets/product/pro5.webp"

const ServiceDetails = () => {



  return (
    <div className=" bg-[#0a2f2f] text-white min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row gap-5 md:pt-[115px]">
        <div>
          <img className="w-[800px] h-[450px] rounded-md" src={service} alt="" />
        </div>
        {/* Left: Booking Form */}
        <div className="bg-green-600 md:p-6 w-full  flex flex-col rounded-md ">
          <h3 className="text-sm  text-white uppercase md:mb-2">Cleaning Service</h3>
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
              className="w-full bg-[#0a2f2f] hover:bg-[#064d4d] text-white py-3 rounded font-semibold">Order Service</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
