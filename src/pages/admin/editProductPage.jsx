import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";
import axios from "axios";



// we do not check all attributes wheather they are changed. Because it make more if conditions and application gets slow.

export default function EditProductPage(){
    const location = useLocation();
    const [productId, setProductId] = useState(location.state.productId);
    const [name, setName] = useState(location.state.name);
    const [altName, setAltName] = useState(location.state.altName.join(","));
    const [description, setDescription] = useState(location.state.description);
    const [images, setImages] = useState([]);
    const [labelledPrice, setLabelledPrice] = useState(location.state.labelledPrice);
    const [price, setPrice] = useState(location.state.price);
    const [stock, setStock] = useState(location.state.stock);
    const navigate = useNavigate();
    
    

async function updateProduct(){
    const token = localStorage.getItem("token");
    if (!token) {
        toast.error("You are not logged in");
        return;
    }
    let imageUrls = location.state.images;

    try {
        // Upload images to Supabase
        const promisesArray = [];
        for (let i = 0; i < images.length; i++) {
            promisesArray[i] = mediaUpload(images[i])
        }
        
        if(images.length > 0){
            imageUrls = await Promise.all(promisesArray);
        }
        
        console.log("Raw image upload results:", imageUrls);

        // ✅ EXTRACT THE ACTUAL URLs FROM THE RESPONSE
        const extractedUrls = imageUrls.map(result => {
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

        axios.put(import.meta.env.VITE_BACKEND_URL+"/api/product/"+productId, product, {
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

    return (
        <div className="w-full h-screen bg-amber-100 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-6">Edit Product</h1>
            {/* productId should not be changed. Therefor keep it disabled */}
            <input type="text" disabled placeholder="Product ID" className="input input-bordered w-full max-w-xs" value={productId} onChange={(e)=>{setProductId(e.target.value)}}/>
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
                    onClick={updateProduct}
                >
                    Update Product
                </button>
            </div>
        </div>
    )
}