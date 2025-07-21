import { createClient } from "@supabase/supabase-js";


// this file is used to upload images to supabase storage
// and get the public url of the image

const url = "https://avcszskxqccnkeybnvqh.supabase.co" 
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2Y3N6c2t4cWNjbmtleWJudnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMDgxMDEsImV4cCI6MjA2MzU4NDEwMX0.9c3s9ostJO1jVV9BzV6IdyHrDu2cLNk4F7avTUAFkeI"

const supabase = createClient(url, key); 

export default function mediaUpload(file){
    
    const mediaUploadPromise = new Promise(
        (resolve, reject)=>{
            if(file == null){
                reject("No file selected");
                return;
            }

            const timestamp = new Date().getTime();
            const newName = timestamp + file.name;

            supabase.storage.from("images").upload(newName, file, {upsert:false, cacheControl: "3600"}).then(() => {

            //get the public url of the image
            const publicUrl = supabase.storage.from("images").getPublicUrl(newName);  
            resolve(publicUrl); // resolve the promise with the public url
            
            })
            .catch((err) => {
                console.log(err);
                reject("Error occured while uploading the file");
            })

        }
    )

    return mediaUploadPromise;
}