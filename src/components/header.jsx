import { Link } from "react-router-dom";
import UserData from "./userData";

export default function Header(){
    return(
        <div id="header" className="bg-green-300 flex justify-center items-center w-full h-16">
            
            <Link to="/login" className="text-blue-500 hover:text-blue-700 m-5">Login</Link> 
            <Link to="/signup" className="text-blue-500 hover:text-blue-700 m-5">Signup</Link>
            <Link to="/" className="text-blue-500 hover:text-blue-700 m5">Home</Link>

        </div>
    )
    
}  