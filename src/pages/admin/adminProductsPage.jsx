import { sampleProducts } from "../../assets/sampleData";
import React, { useState } from "react";


export default function AdminProductsPage(){

    const[products, setProducts] = useState(sampleProducts); // state to store the products in an array
    /*
    {
      "productId": "COS001",
      "name": "Radiant Glow Serum",
      "altName": "Vitamin C Face Serum",
      "description": "A brightening serum infused with Vitamin C for a radiant, youthful complexion.",
      "images": ["radiant_glow_serum.jpg"],
      "labelledPrice": 55,
      "price": 49.99,
      "stock": 120,
      "isAvailable": true
    }*/

    return(
    
        //overflow-y-scroll is used to make the table scrollable when the screen is small
        <div className="w-full h-screen bg-blue-100 overflow-y-scroll max-h-full">

            <table className="w-full table-auto border-collapse border border-gray-300 text-center">
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
                    <tr className="border-b border-gray-300 hover:bg-gray-100">
                        <td>COS001</td>
                        <td>Radiant Glow Serum</td>
                        <td><img src="https://th.bing.com/th/id/OIP.p1leH4kLXcO_zN22Zj-yhAHaHa?rs=1&pid=ImgDetMain" alt="Radiant Glow Serum" className="w-20 h-20"/></td>
                        <td>55</td>
                        <td>49.99</td>
                        <td>120</td>
                    </tr>
                    <tr className="border-b border-gray-300 hover:bg-gray-100">
                        <td>COS002</td>
                        <td>Hydra Boost Moisturizer</td>
                        <td><img src="https://th.bing.com/th/id/OIP.p1leH4kLXcO_zN22Zj-yhAHaHa?rs=1&pid=ImgDetMain" alt="Hydra Boost Moisturizer" className="w-20 h-20"/></td>
                        <td>45</td>
                        <td>39.99</td>
                        <td>80</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )


}