const mongoose=require("mongoose")
require ('dotenv').config()
DATABASE= process.env.DATABASE_URL
const url=DATABASE
module.exports.connect=()=>{
    mongoose.connect(url,console.log("Mongoose is Connected Successfully is Connected"))
}