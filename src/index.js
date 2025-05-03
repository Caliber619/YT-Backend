// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()




// Method-1 above 

// Method-2 below




/*

import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"

// approach-1 below and another approach is making different files

import express from "express"
const app = express()

// -------------------------
// function connectDB(){}
// connectDB()
// -- instead of this approach we can use iife ()() below approach
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR: ",error);
    }
} )();
// -------------------------


*/