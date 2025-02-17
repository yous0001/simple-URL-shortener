import express from "express"
import db_connection from "./DB/db_connection.js"
import shorterRouter from "./Routes/shorter.router.js"
import { config } from "dotenv"
import { globalResponse } from "./middlewares/globalResponce.middleware.js"

config()
const port = process.env.PORT || 3000
const app=express()
app.use(express.json())
app.use("/url",shorterRouter)

app.use('*',(req,res,next)=>{
    res.status(404).json({message:"end point not found"})
})

app.use(globalResponse)
db_connection()
app.listen(port,()=>{
    console.log(`app is running on port ${port}`)
})