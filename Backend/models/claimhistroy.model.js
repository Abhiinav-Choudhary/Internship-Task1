import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId , ref:"User"
    } ,
  Username : String,
  points:Number
},{timestamps:true})

const Claimhistroy =mongoose.model("Claimhistory", historySchema)

export default Claimhistroy