import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()

// configuring/setting up middleware functions 
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit: "16kb",
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb",
}))

app.use(express.static("Public"))

app.use(cookieParser())



// routes---- 
import userRouter from './routes/user.routes.js'



// routes declaration----
// app.get ki help se hum kaam krre the yhi pe route and controller likh re the but idhar ab app.use likhege(so we will need middleware)
app.use("/api/v1/users", userRouter)   //api and version standard practice hai


export { app }