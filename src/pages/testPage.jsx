
import { useState } from "react";
import mediaUpaload from "../utils/mediaUpload";

export default function TestPage(){
    
    const [image, setImage] = useState(null);
    
    // this function is used to upload the image to supabase storage
    function fileUpload(){
        // see src/utils/mediaUpload.jsx for the implementation of mediaUpload function
        // this function takes a file as input and returns a promise
        mediaUpaload(image).then((res) => {
            console.log(res);

        }).catch((err) => { 

            console.log(err);
            }
        )
    }

    return(
      <div className="w-full h-screen bg-amber-100 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-lg p-4 mb-7">
            {/* this is file input field */}
            <input type="file"  onChange={(e) => setImage(e.target.files[0])} />

        </div>
        
        
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors" onClick={fileUpload}>
            Upload  </button>
        

    </div>
    )

}