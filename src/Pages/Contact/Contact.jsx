import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import Map from "../Map";
import { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
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
        <div className='max-w-[1100px] mt-[90px] mx-auto '>
            <div className='flex gap-4 p-10 rounded-md shadow-sm shadow-black/30 md:mb-[50px]'>

                <div className=' rounded-md md:w-[500px] mt-[70px] p-5'>
                    <div className="flex gap-2 text-xl items-center text-green-600">
                        <TfiLayoutLineSolid className="text-xl" />
                        <p>Contact us</p>
                    </div>
                    <p className="text-4xl font-bold my-5">Get in touch with us</p>
                    <p className="my-4 text-sm text-green-600">Address:  <span className="text-black">Bashundhara R/A, Dhaka-1212</span></p>

                    <div className="flex gap-5 items-center my-5">
                        <BiSolidPhoneCall className="bg-green-600 text-5xl text-white p-2 rounded-full" />
                        <div>
                            <p className="text-sm">CUSTOMER SERVICE:</p>
                            <p className="text-sm">+9-555-888-679, +9-666-888-679</p>
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <MdEmail className="bg-green-600 text-5xl p-2 text-white rounded-full" />
                        <div className="text-sm">
                            <p>EMAIL SERVICE:</p>
                            <p>info@procleaning.com</p>
                        </div>
                    </div>

                    <hr className="my-5" />

                    <div className="flex gap-2 items-center">
                        <h1 className="font-bold">FOLLOW US:</h1>
                        <div className="flex text-xl text-green-600 gap-3 items-center">
                            <FaSquareXTwitter />
                            <FaLinkedin />
                            <FaSquareInstagram />
                        </div>
                    </div>
                </div>


                <div className='md:w-[500px] bg-green-950 p-5 rounded-md' >
                    <form onSubmit={handlSubmit}>
                        <label className="text-white" htmlFor="">Name:</label> <br />
                        <input className="w-full bg-slate-100 my-2 border p-3 rounded-md"
                            type="text"
                            name="from_name" id=""
                            value={from_name}
                            onChange={(e) => setFrom_name(e.target.value)} placeholder="Enter Name" required /><br />

                        <label className="text-white" htmlFor="">Email:</label> <br />
                        <input className="w-full bg-slate-100 my-2 border p-3 rounded-md" type="email"
                            name="from_email" id=""
                            value={from_email}
                            onChange={(e) => setFrom_email(e.target.value)} placeholder="Enter Email" required /><br />

                        <label className="text-white" htmlFor="">Number:</label> <br />
                        <input className="w-full bg-slate-100 my-2 border p-3 rounded-md" type="number"
                            name="from_number" id=""
                            value={from_number}
                            onChange={(e) => setFrom_number(e.target.value)} placeholder="Enter Number" required /><br />
                        <label className="text-white" htmlFor="">Massage</label> <br />

                        <textarea className="w-full bg-slate-100 my-2 border p-3 rounded-md" name="massage" id="" cols="10" rows=""
                            value={from_massage}
                            onChange={(e) => setFrom_massage(e.target.value)} placeholder="Type Massage"></textarea><br />

                        <input className="w-full cursor-pointer hover:bg-green-800 mt-2 text-white font-bold duration-300 bg-green-600 rounded-md py-5" type="submit" value="SEND" />
                    </form>
                </div>
            </div>

            <Map className="mb-10" />
        </div>
    );
};

export default Contact;