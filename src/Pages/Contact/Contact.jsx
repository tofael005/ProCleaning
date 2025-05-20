import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

const Contact = () => {


    return (
        <div className='max-w-[1100px] mt-[160px] mx-auto '>
            <div className='flex gap-4'>
                <div className=' rounded-md md:w-[600px] p-5'>
                    <div className="flex gap-2 text-xl items-center text-green-600">
                        <TfiLayoutLineSolid className="text-xl" />
                        <p>Contact us</p>
                    </div>
                    <p className="text-3xl font-bold my-2">Get in touch with us</p>
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
                            <FaSquareXTwitter  />
                            <FaLinkedin />
                            <FaSquareInstagram />
                        </div>
                    </div>
                </div>


                <div className='w-full' >
                    <form action="">
                        <div className="flex items-center gap-3">
                            <input className="w-full p-4 rounded-md bg-gray-100"
                            type="text"  placeholder="Fast name*"/>

                            <input className="w-full p-4 rounded-md bg-gray-100"
                            type="text" placeholder="Last name*"/>
                        </div>
                        <div className="flex items-center gap-3 mt-3">
                            <input className="w-full p-4 rounded-md bg-gray-100"
                            type="number"  placeholder="Your phone*"/>

                            <input className="w-full p-4 rounded-md bg-gray-100"
                            type="email" placeholder="Your email*"/>
                        </div>
                        <textarea className="bg-gray-100 w-full mt-3 rounded-md p-3 h-[130px]" name="" id="" placeholder="your message...."></textarea>

                        <input className="w-full hover:bg-green-950 duration-200 bg-green-600 text-white p-4 mt-4 rounded-md cursor-pointer" type="button" value="Send Message" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;