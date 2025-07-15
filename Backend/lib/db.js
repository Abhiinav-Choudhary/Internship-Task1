import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
export const connectDB =async()=>{
try {
  return await  mongoose.connect(process.env.MONGO_URL)
} catch (error) {
    console.log("Error in data connectivity");
    
}
}