import express from "express"
import db_connection from "./DB/db_connection"
import shorterRouter from "./Routes/shorter.router.js"
import { config } from "dotenv"

config()
const port = process.env.PORT || 3000
const app=express()
app.use(express.json())
app.use(shorterRouter)

db_connection()
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})