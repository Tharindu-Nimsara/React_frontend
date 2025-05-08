import { Link, Route, Routes } from "react-router-dom";
import AdminProductsPage from "./admin/adminProductsPage";

export default function AdminPage(){
    return(
        <div className="w-full h-screen bg-green flex flex-row  ">

           <div className="w-[300px] h-full bg-yellow-200 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
                {/* link tag is used to switch between pages smoothly without refreshing whole website */} 
                <Link to="/admin/products" className="text-blue-500 hover:text-blue-700 m-5" >Products</Link>
                <Link to="/admin/users" className="text-blue-500 hover:text-blue-700 m-5">Users</Link>
                <Link to="/admin/orders" className="text-blue-500 hover:text-blue-700 m-5">Orders</Link>
                <Link to="/admin/reviews" className="text-blue-500 hover:text-blue-700 m-5">Reviews</Link>
           </div>
           <div className="w-full h-full bg-blue-100 ">
                <Routes path="/*">   {/* localhost:5172/admin */} 
                    <Route path="/products" element={<AdminProductsPage/>} />         {/* localhost:5172/admin/products */} 
                    <Route path="/users" element={<h1>Users</h1>} />                {/* localhost:5172/admin/users */} 
                    <Route path="/orders" element={<h1>Orders</h1>} />         {/* localhost:5172/admin/orders */}  
                    <Route path="/reviews" element={<h1>Reviews</h1>} />        {/* localhost:5172/admin/reviews */}
                    <Route path="/*" element={<h1>Not Found</h1>} />       {/* localhost:5172/admin/anything */}    
                    
                </Routes>

           </div>

        </div>   
    )
}