import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router()     //same express se app bhi banta tha

router.route("/register").post(registerUser)



export default router