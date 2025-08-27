import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


export default function AdminProductsPage(){

    //when making any type of data table You have to use below products, isLoading, useEffect()  

    const[products, setProducts] = useState([]); // state to store the products in an array
    const[isLoading, setIsLoading] = useState(true); // a attribute of the page.  loading when beginning
    const navigate = useNavigate();
    useEffect(() =>{ 
        // fetch the products from the backend using axios
        // the backend url is stored in the .env file
        if (isLoading==true){ //we can make isLoading == true from any where in the code to refresh the page
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product")
                .then((res) => {
                    console.log(res.data);
                    setProducts(res.data); // set the products state to the data received from the backend
                    setIsLoading(false); //after setting the products loading is false
                });
            }
        }   , [isLoading]); // empty array means this effect will run only once when the component mounts 
        //we can enter variables to the array then if variable values changes, use effect runs once. Is is like reloading the page...
        //...after updating/deleting something. but this is only sensitive to basic variables like integers, booleans, string etc. isloading is a boolean 

        
 
    function deleteProduct(productId){
        const token = localStorage.getItem("token");
        if(token==null){
            toast.error("Please login first")
            return
        }
        axios.delete(import.meta.env.VITE_BACKEND_URL + "/api/product/"+ productId , {
            headers: {
                "Authorization" : "Bearer "+token
            }
        }).then(()=>{
            toast.success("Product deleted successfully")
            setIsLoading(true);
        }).catch((e)=>
        {toast.error(e.response.data.message)})
    }

    return(
    
        //overflow-y-scroll is used to make the table scrollable when the screen is small
        <div className="w-full h-screen bg-blue-100 overflow-y-scroll max-h-full relative">
            <Link to="/admin/add-product" className="absolute cursor-pointer bottom-20  right-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Add Product</Link>
           {
            //have to hide the table when loading. below code only show table when isLoading = false. we can't use if inside html.
            isLoading ?
            <div className="w-full h-full flex justify-center items-center"> {/* this is loading animation */}
                <div className="w-[70px] h-[70px] border-[5px] border-gray-300 border-t-blue-900 rounded-full animate-spin"> </div>
             </div> : 
            <table className="w-full table-auto border-collapse border border-gray-300 text-center ">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Product ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Labeled Price</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Stock</th>
                        <th className="px-4 py-2">Actions</th>
                        
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {
                        products.map((item) => (
                            <tr key={item.productId} className="border-b border-gray-300 hover:bg-gray-100">
                                <td className="px-4 py-2">{item.productId}</td>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2"><img src={item.images[0]} alt={item.altName} className="w-16 h-16 object-cover"/></td>
                                <td className="px-4 py-2">${item.labelledPrice}</td>
                                <td className="px-4 py-2">${item.price}</td>
                                <td className="px-4 py-2">{item.stock}</td>
                                <td>
                                    
                                    <div className="flex justify-center gap-4 width-full cursor-pointer">
                                        <FaTrash className=" text-[20px] text-red-500" onClick={()=>
                                            {deleteProduct(item.productId)}
                                        }/> 


                                        {/* we can input 2 parameters to navigate() . first one is destination url and other one is a json which consist of 
                                        attribute 'state' which hold all the item details that we are going to bring to destination page. when updating
                                        a product we can bring the past info of the product to edit page. */}
                                        <FaEdit className= "text-[20px] text-blue-500" onClick={
                                            ()=>navigate("/admin/edit-product/", {
                                                state: item
                                            })
                                        }  />
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
            }
        </div>
    )


}