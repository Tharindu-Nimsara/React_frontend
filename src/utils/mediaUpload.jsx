import { createClient } from "@supabase/supabase-js";


// this file is used to upload images to supabase storage
// and get the public url of the image

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

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