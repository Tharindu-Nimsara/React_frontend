import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";
import axios from "axios";

export default function AddProductPage(){

    const [productId, setProductId] = useState('');
    const [name, setName] = useState('');
    const [altName, setAltName] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]);
    const [labelledPrice, setLabelledPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();

async function AddProduct(){
    const token = localStorage.getItem("token");
    if (!token) {
        toast.error("You are not logged in");
        return;
    }
    if (images.length<=0){
        toast.error("Please select at least one image");
        return;
    }

    try {
        // Upload images to Supabase
        const promisesArray = [];
        for (let i = 0; i < images.length; i++) {
            promisesArray[i] = mediaUpload(images[i])
        }
        
        const imagesUrls = await Promise.all(promisesArray);
        console.log("Raw image upload results:", imagesUrls);

        // ✅ EXTRACT THE ACTUAL URLs FROM THE RESPONSE
        const extractedUrls = imagesUrls.map(result => {
            if (result && result.data && result.data.publicUrl) {
                return result.data.publicUrl;
            }
            // Fallback in case the structure is different
            return result.publicUrl || result;
        });

        console.log("✅ Extracted URLs:", extractedUrls);

        const altNamesArray = altName.split(",").map(name => name.trim()).filter(name => name);
        
        const product = {
            productId: productId,
            name: name,
            altName: altNamesArray,
            description: description,
            images: extractedUrls, // ✅ Use extracted URLs instead of raw results
            labelledPrice: parseFloat(labelledPrice),
            price: parseFloat(price),
            stock: parseInt(stock)
        }

        console.log("📤 Sending product data:", product);

        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/product", product, {
            headers: {
                "Authorization": "Bearer "+token
            }
        }).then(() => {
            toast.success("Product added successfully");
            navigate("/admin/products");    
        }).catch((e) => {
            console.log("❌ Error:", e.response?.data);
            toast.error(e.response?.data?.message || "Error adding product");
        })    

    } catch(e) {
        console.log("❌ Upload error:", e);
        toast.error("Error uploading images");
        return;
    }    
}

//     async function AddProduct(){
//         const token = localStorage.getItem("token");
//         if (!token) {
//             toast.error("You are not logged in");
//             return;
//         }
//         if (images.length<=0){
//             toast.error("Please select at least one image");
//             return;
//         }
        
//         if (!productId.trim() || !name.trim() || !description.trim()) {
//             toast.error("Product ID, Name, and Description are required");
//             return;
//         }



//         //we have to upload all the images to supabase storage
//         //and get the public urls of the images
//         //so we make promises for each image upload
//         const promisesArray = [];

//         for (let i = 0; i < images.length; i++) {
//             promisesArray[i] = mediaUpload(images[i])
//         }
//         //after all the promises are resolved, we can add the product to the database
//         try {
//             const imagesUrls = await Promise.all(promisesArray);
//             console.log("✅ Images uploaded successfully:", imagesUrls); // This will give us an array of public urls of the images

//              const altNamesArray = altName.split(",").map(name => name.trim()).filter(name => name); // ✅ Clean up empty strings
            
//             const product = {
//                 productId: productId,
//                 name: name,
//                 altName: altNamesArray,
//                 description: description,
//                 images: imagesUrls,
//                 labelledPrice: parseFloat(labelledPrice),
//                 price: parseFloat(price), // ✅ Ensure it's a number
//                 stock: parseInt(stock)
//             }
//             console.log("📤 Sending product data:", product); // ✅ Debug log


//             const response = await axios.post(
//             import.meta.env.VITE_BACKEND_URL + "/api/product", 
//             product, 
//             {
//                 headers: {
//                     "Authorization": "Bearer " + token,
//                     "Content-Type": "application/json" // ✅ Explicit content type
//                 }
//             }
//         );

//             console.log("✅ Backend response:", response.data);
//             toast.success("Product added successfully");
//             navigate("/admin/products");

//         } catch(error) {
//             console.error("❌ Full error object:", error);
//             console.error("❌ Error response:", error.response?.data);
//             console.error("❌ Error message:", error.message);
            
//             if (error.response?.data?.message) {
//                 toast.error(error.response.data.message);
//             } else if (error.message) {
//                 toast.error(error.message);
//             } else {
//                 toast.error("Error adding product");
//             }
//         }
// }

    return (
        <div className="w-full h-screen bg-amber-100 flex flex-col items-center justify-center">
            <input type="text" placeholder="Product ID" className="input input-bordered w-full max-w-xs" value={productId} onChange={(e)=>{setProductId(e.target.value)}}/>
            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mt-4" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" placeholder="Alt Name" className="input input-bordered w-full max-w-xs mt-4" value={altName} onChange={(e)=>{setAltName(e.target.value)}}/>
            <textarea placeholder="Description" className="textarea textarea-bordered w-full max-w-xs mt-4" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            <input type="file" placeholder="Images" multiple className="input  input-bordered w-full max-w-xs mt-4" onChange={(e)=>{setImages(e.target.files)}}/>
            <input type="number" placeholder="Labelled Price" className="input input-bordered w-full max-w-xs mt-4" value={labelledPrice} onChange={(e)=>{setLabelledPrice(e.target.value)}}/>
            <input type="number" placeholder="Price" className="input input-bordered w-full max-w-xs mt-4" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            <input type="number" placeholder="Stock" className="input input-bordered w-full max-w-xs mt-4" value={stock} onChange={(e)=>{setStock(e.target.value)}}/>
            <div className="w-full flex justify-center flex-row items-center mt-6 gap-4">
                <Link
                    to="/admin/products"
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-400 to-red-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
                >
                    Cancel
                </Link>
                <button
                    className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
                    onClick={AddProduct}
                >
                    Add Product
                </button>
            </div>
        </div>
    )
}