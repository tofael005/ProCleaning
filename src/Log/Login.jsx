import { useState } from "react";
import banner from "../assets/product/banner3.jpeg"
import Swal from "sweetalert2";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase/Firebase.config";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    
    const loginHandle = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredencial) =>{
            console.log(userCredencial);
            navigate("/dashboard")
        }).catch((error) =>{
            console.log(error);
        })

        setEmail(""),
        setPassword("")
        {
            Swal.fire({
                title: 'Logged In',
                icon: 'success',
                confirmButtonText: 'Thanks'
            })
        }

    }

    return (
        <div>
            <img className="h-[100vh] relative w-full" src={banner} alt="" />

            <div className="absolute md:w-full md:h-[100vh] h-[670px] bg-black/80 md:top-[109px] top-[95px] w-full px-3">

                <div className="p-5 md:w-[600px] w-full mx-auto md:mt-[180px] mt-[120px] border rounded-md">
                    <h1 className="text-center font-bold text-xl text-orange-500 uppercase my-4">Admin Login</h1>

                    <form onSubmit={loginHandle}>
                        <input className="w-full p-3 rounded-md mb-5"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email" id=""
                            placeholder="Enter email..." required />
                        <br />

                        <input className="w-full p-3 rounded-md"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            name="password" id=""
                            placeholder="Enter password..." required />
                        <br />

                        <input className="block mx-auto font-bold bg-green-600 hover:bg-blue-500 duration-300 w-full mt-5 p-3 rounded-md cursor-pointer" type="submit" value="Login" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;