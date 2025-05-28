import Swal from "sweetalert2";
import service from "../../assets/product/banner.webp"
import { useState } from "react";

const ServiceDetails = () => {
  const [from_name, setFrom_name] = useState("");
  const [from_email, setFrom_email] = useState("");
  const [from_massage, setFrom_massage] = useState("");
  const [from_number, setFrom_number] = useState("")

  const handlSubmit = async (e) => {
    e.preventDefault();

    setFrom_name("");
    setFrom_email("");
    setFrom_number("");
    setFrom_massage("");

    const usersData = {
      from_name, from_email, from_massage, from_number
    }
    console.log(usersData)

    fetch("http://localhost:8000/userData", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(usersData)
    })

      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Submit',
            icon: 'success',
            confirmButtonText: 'Thanks'
          })
        }
      })
  }



  return (
    <div className=" bg-[#0a2f2f] text-white min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row gap-5 md:pt-[70px]">
        <div>
          <img className="w-[900px] h-[570px] rounded-md" src={service} alt="" />
        </div>
        {/* Left: Booking Form */}
        <div className="bg-green-600 md:p-6 w-full  flex flex-col rounded-md ">
          <h3 className="text-sm  text-white uppercase md:mb-2">Cleaning Service</h3>
          <h2 className="text-3xl font-bold mb-6">Book Your Cleaning?</h2>

          <form onSubmit={handlSubmit} className="space-y-4 text-gray-500">
            <input className="w-full bg-slate-100 my-2 border p-3 rounded-md"
              type="text"
              name="from_name" id=""
              value={from_name}
              onChange={(e) => setFrom_name(e.target.value)} placeholder="Enter name*" required /><br />

            <input className="w-full bg-slate-100 my-2 border p-3 rounded-md"
              type="email"
              name="from_email" id=""
              value={from_email}
              onChange={(e) => setFrom_email(e.target.value)} placeholder="Enter email*" required /><br />

            <input className="w-full bg-slate-100 my-2 border p-3 rounded-md"
              type="number"
              name="from_number" id=""
              value={from_number}
              onChange={(e) => setFrom_number(e.target.value)} placeholder="Enter number*" required /><br />

            <select className="p-2 w-full md:p-3 rounded text-black">
              <option>Type of service</option>
              <option>Home Cleaning</option>
              <option>Office Cleaning</option>
              <option>Window Cleaning</option>
              <option>Bathroom Cleaning</option>
              <option>BED & MATTRES Cleaning</option>
              <option>HOME SERVICE</option>
            </select>


            <textarea className="w-full bg-slate-100 my-2 border p-3 rounded-md" name="massage" id="" cols="10" rows=""
              value={from_massage}
              onChange={(e) => setFrom_massage(e.target.value)} placeholder="Type massage*"></textarea><br />


            <input className="w-full cursor-pointer hover:bg-green-950 mt-2 text-white font-bold duration-300 bg-green-800 rounded-md py-5" type="submit" value="SEND ORDER" />
          </form>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
