import { createClient } from "@supabase/supabase-js";
import { useState } from "react";

export default function TestPage(){
    
    const [image, setImage] = useState(null);
    
    const url = "https://jzqzeilcxzrwxlenxqvv.supabase.co" 

    const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6cXplaWxjeHpyd3hsZW54cXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMDgyOTksImV4cCI6MjA2MzU4NDI5OX0.92o8pafDH-KLl9qJIkiWhi4yYolN8tC71bHeV_mPx6s"

    const supabase = createClient(url, key); 

    function fileUpload(){
        
        //images is the name of the bucket in supabase
        //image is the file to be uploaded
        //upload the image to supabase storage
        supabase.storage.from("images").upload(image.name, image, {upsert:false, cacheControl: "3600"}).then(() => {

            //get the public url of the image
            const publicurl = supabase.storage.from("images").getPublicUrl(image.name);  
            console.log(publicurl); 
        })
        .catch((err) => {
            console.log(err);
        })
        
    }
    
    return(
      <div className="w-full h-screen bg-amber-100 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg p-4 mb-7">
            <input type="file"  onChange={(e) => setImage(e.target.files[0])} />

        </div>
        
        
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors" onClick={fileUpload}>
            Upload  </button>
        

    </div>
    )

}