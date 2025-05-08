import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage(){
    //hook to manage the state of the username and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(e){
        e.preventDefault(); // prevent form reload
        console.log(email);
        console.log(password);
    
        try{
            // http request to the backend to login the user
            // using axios to send a post request to the backend with the email and password
            // the backend url is stored in the .env file
            const response = await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login", {
                email: email,
                password: password
            })
            console.log(response);
            toast.success("Login successful!");
            // store the token in local storage
            localStorage.setItem("token", response.data.token); 

            //direct the user to admin page if the user is an admin
            if(response.data.role === "admin"){
                window.location.href = "/admin";
            }

        }catch(e){
            
            toast.error(e.response.data.message);
        }
        
        
    }

    return(
        <div className="w-full h-screen bg-[url(login.jpg)] bg-center bg-cover backdrop-blur-md flex flex-col items-center justify-center">
            
            <form className=" px-10 py-8 rounded-[20px] backdrop-blur-md shadow-xl w-80">
                <div className="flex justify-center items-center ">
                    <h1 className="text-2xl font-bold mb-4 item-center justify-center">Login</h1>
                </div>
                 
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="username">Email</label>
                    <input 
                    onChange={
                        (e) => {
                            setEmail(e.target.value);
                        }
                    }
                    value={email}
                    className="border border-gray-300 p-2 w-full rounded" type="text" id="username" name="username" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }
                    } value={password} className="border border-gray-300 p-2 w-full rounded" type="password" id="password" name="password" required />
                </div>
                <button onClick={handleLogin} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors w-full">Login</button>
            </form>
        </div>
    )
}