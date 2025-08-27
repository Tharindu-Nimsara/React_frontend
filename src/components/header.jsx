import { Link, useNavigate } from "react-router-dom";
import UserData from "./userData";

export default function Header(){
    const navigate = useNavigate()
    return(
        <header id="header" className="bg-white-300 shadow-2xl flex  items-center w-full h-20">
            <img src="public\logo.png" onClick={()=>navigate("/")} alt="logo" className="ml-7 cursor-pointer " height={60} width={60} />
            <div className="w-[calc(100%-160px)] h-full bg-red-200 flex justify-center items-center ">
                <Link to="/" className="text-blue-500 hover:text-blue-700 m5">Home</Link>
                <Link to="/product" className="text-blue-500 hover:text-blue-700 m-5">Products</Link> 
                <Link to="/about" className="text-blue-500 hover:text-blue-700 m-5">About</Link>
                <Link to="/contact" className="text-blue-500 hover:text-blue-700 m-5">Contact</Link>
            </div>
            <div className="w-[130px] bg-blue-500">

            </div>
            

        </header>
    )
    
}  