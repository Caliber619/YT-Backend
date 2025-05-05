// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERRR: ", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(` Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!!", err)
})




// Method-1 above 

// Method-2 below




/*

import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"

// approach-2 below and another approach(above) is making different files

import express from "express"
const app = express()

// -------------------------h
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

        app.listen(process.env.PORT || 8000, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("ERROR: ",error);
    }
} )();
// -------------------------


*/