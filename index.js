const express = require("express")
const cors = require('cors')
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const path = require('node:path');
const cookieParser = require("cookie-parser")
const dbconnection = require("./database/dbconfig")




const app = express()   
app.use(express.json())
app.use(cookieParser())
app.use(cors());


const PORT = process.env.PORT || 1900 

dbconnection()   

app.get("/", (req, res)=>{
    return res.status(200).json({message: "API WORKING FINE"})
})
 
app.listen(PORT, ()=>{
    console.log(`server is running on https://localhost:${PORT}`)
})