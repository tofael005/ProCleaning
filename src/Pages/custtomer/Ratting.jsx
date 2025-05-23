import React from "react";

const companies = [
  { name: "Grameenphone", logo: "https://i.ibb.co/NgFxjZrz/grameenphone-bridging-the-digital-divide-through-upskilling-1000x700.jpg" },
  { name: "IUB", logo: "https://i.ibb.co/YB9BBvDz/1549181042.png" },
  { name: "Gentle-park", logo: "https://i.ibb.co/d02YR0QD/gentle-park-20240919191624.jpg" },
  { name: "VNC College", logo: "https://i.ibb.co/9kbrD2Nq/20235-viqarunnisa-noon-school-college-logo.png" },
  { name: "IBN SINA", logo: "https://i.ibb.co/kgCG2dZf/ibn-sina-diagnostic-consultation-centre-uttara.jpg" },
  { name: "Techno Vista", logo: "https://i.ibb.co/ycHTkCK4/Techno-Vista.png" },
];

const Ratting = () => {
  return (
    <div className="md:h-[440px]  bg-[#032B2A] md:p-16 mt-10 text-white font-sans mb-16">
      <section className="grid md:grid-cols-2 container">
        {/* Left Section */}
        <div className="space-y-5 mx-auto md:mx-0 md:mt-0 mt-5">
          <div className="flex">
            <div>
                <hr className="w-12 h-1 mt-3 md:mt-4 bg-green-500" />
            </div>
            <div>
                <p className="text-green-400 ml-2 md:text-[21px] text-[18px]  font-semibold uppercase tracking-wide">About Cleaning</p>
            </div>
          </div>
          <h1 className="md:text-6xl text-3xl font-bold md:leading-tight">
            Excellent <span className="text-green-400">Service</span> <br /> cleaning
          </h1>
          <div className="flex items-center gap-3 mt-4">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-white -ml-4" />
            <div className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold -ml-4">+</div>
            <div>
                <p className="ml-2 text-xl font-medium">57+ <br />Members</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid md:grid-cols-3 gap-5 mt-3 md:mt-0 p-10 md:p-0">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-[#053A40] rounded-lg p-6 flex flex-col items-center gap-4 text-white shadow-md"
            >
              <img src={company.logo} alt={company.name} className="h-10 object-contain" />
              <p className="text-lg font-medium">{company.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Ratting;