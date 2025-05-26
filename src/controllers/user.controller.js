// we have already written a asynchandler file to wrap async functions
import { asyncHandler } from "../utils/asyncHandler.js"


// create karte a method to register a user
const registerUser = asyncHandler( async(req,res)=>{
    return res.status(200).json({
        message: "Caliber's Server is working fine!"
    })
} )

export {registerUser}