
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const dbconnection = async()=>{
    try{

        await mongoose.connect(process.env.MONGODB_URL)
        .then(()=> console.log("database connection was successful..."))

    } catch (error) {
        console.log(error)
    }

}

module.exports = dbconnection