import { useState } from "react";

export default function TestPage(){
    
    //these are a hooks
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState("Passed");
    
    return(
        <div className="w-full h-screen  flex justify-center items-center" >
            <div className="w-[450px] h-[250px] bg-blue-900 flex  items-center justify-center rounded-lg shadow-lg" >
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[60px] h-[40px] m-[20px] cursor-pointer" onClick={
                    () => {
                        setCount(count - 1);
                    }
                }>-</button>
                <span className="text-white w-[100px] h-[100px] text-[20px] py-[38px] flex item-center justify-center">{count}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[60px] h-[40px] m-[20px] cursor-pointer" onClick={
                    ()=>{
                        setCount(count + 1);
                    }
                }>+</button>
            </div>

            <div className="w-[450px] h-[250px] bg-blue-900 flex  items-center justify-center rounded-lg shadow-lg mx-[30px]" >

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[100px] h-[40px] m-[20px] cursor-pointer" onClick={
                    () => {
                        setStatus("Passed");
                    }
                }>Passed</button>
                <span className="text-white w-[100px] h-[100px] text-[20px] py-[38px] flex justify-center item-center">{status}</span>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[100px] h-[40px] m-[20px] cursor-pointer" onClick={
                    () => {
                        setStatus("Failed");
                    }
                }>Failed</button>

            </div>


        </div>
    )

}