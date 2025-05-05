import { useState } from "react";

export default function TestPage(){
    
    const [count, setCount] = useState(0);
    
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


        </div>
    )

}