// maan lo server pe file aachuki hai(multer ki help se)
// and now ab hum us local file ka path chahiye jiski help se hum file ko cloudinary pe daal denge
// and if the file is successfully uploaded then we will have to remove the file from the server


import { v2 as cloudinary } from "cloudinary";
import fs from "fs" // our file system(node js ke sath by default aata hai)
// kyuki hume file ka path chahiye


//configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET 
});


//method banake krte h file ke liye(ek local-path accept krra ho function)
const uploadOnCloudinary = async(localFilePath) =>{
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log("File is uploaded on cloudinary", response.url)
        return response;
    } catch (error) {
        console.log(`Locally stored file is unlinked as ERROR is in file upload: ${error}`)
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}