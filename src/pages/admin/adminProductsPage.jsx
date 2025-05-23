import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function AdminProductsPage(){

    const[products, setProducts] = useState([]); // state to store the products in an array
 
    useEffect(() => {
        // fetch the products from the backend using axios
        // the backend url is stored in the .env file
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then((res) => {
            console.log(res.data);
            setProducts(res.data); // set the products state to the data received from the backend
        })
    }   , []); // empty array means this effect will run only once when the component mounts

    return(
    
        //overflow-y-scroll is used to make the table scrollable when the screen is small
        <div className="w-full h-screen bg-blue-100 overflow-y-scroll max-h-full relative">
            <Link to="/admin/add-product" className="absolute cursor-pointer bottom-20  right-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Add Product</Link>
            <table className="w-full table-auto border-collapse border border-gray-300 text-center ">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Product ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Labeled Price</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Stock</th>
                        
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )


}