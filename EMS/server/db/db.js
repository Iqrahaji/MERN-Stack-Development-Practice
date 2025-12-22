import mongoose from "mongoose";
require("dotenv").config();


const connectToDatabase = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
    }catch(error){
        console.log(error)
    }
}

export default connectToDatabase


