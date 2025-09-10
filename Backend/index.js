import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import authRouter from './route/authRoute.js';
import cors from "cors";
import userRouter from './route/userRoute.js';
import courseRouter from './route/courseRoute.js';
import paymentRouter from './route/paymentRoute.js';
import reviewRouter from './route/reviewRoute.js';
dotenv.config()


const port=process.env.PORT
const app= express();


//** middleware  */
app.use(express.json())
app.use(cookieParser())
//** */


//** Cors package which stabilize conaction between backend and frontend */
app.use(cors({
    origin:"https://edubridge-1-ocmm.onrender.com",
    credentials:true
}))
//** */

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/course",courseRouter)
app.use("/api/order",paymentRouter)
app.use("/api/review",reviewRouter)

app.get("/",(req,res)=>{
    res.send("Hello from Server")
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
    connectDb()
})
