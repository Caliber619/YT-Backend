import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username:{
            type:String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName:{
            type:String,
            required: true,
            trim: true,
            index: true,
        },
        avatar:{
            type:String,  // cloudinary url
            required: true,
        },
        coverImage:{
            type:String,
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password:{
            type:String,
            required: [true, 'Password is required'],
        },
        refreshToken:{ 
            type:String,
        }
    },
    {timestamps:true}
);
 
userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    //agar modified nahi hua hai to seedha next() call krdo otherwise

    this.password = await bcrypt.hash(this.password, 10)
    next()
}) //pre hook lagaege event pe data save hone se phle and we get a callback


userSchema.methods.isPasswordCorrect = async function(password){
   return await bcrypt.compare(password, this.password)
};

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        //payload
        {
            _id: this.id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        //accessToken
        process.env.ACCESS_TOKEN_SECRET,
        //ek expiry object
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        //payload
        {
            _id: this.id,
        },
        //accessToken
        process.env.REFRESH_TOKEN_SECRET,
        //ek expiry object
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const Users = mongoose.model("User",userSchema)