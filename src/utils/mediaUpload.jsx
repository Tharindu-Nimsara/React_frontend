import { createClient } from "@supabase/supabase-js";


// this file is used to upload images to supabase storage
// and get the public url of the image

const url = "https://jzqzeilcxzrwxlenxqvv.supabase.co" 
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6cXplaWxjeHpyd3hsZW54cXZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMDgyOTksImV4cCI6MjA2MzU4NDI5OX0.92o8pafDH-KLl9qJIkiWhi4yYolN8tC71bHeV_mPx6s"

const supabase = createClient(url, key); 

export default function mediaUpaload(file){
    
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