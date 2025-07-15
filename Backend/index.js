import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT
import router from './routes/user.route.js'
import { connectDB } from './lib/db.js'
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use('/api',router)


if(connectDB()){
    console.log("Database connected sucessfully");
}
app.listen(PORT , ()=>{
    console.log(`Server is running at port : ${PORT}`);
    
})