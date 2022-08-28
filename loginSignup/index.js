const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://subhankar:subho0905@cluster0.zrx9z.mongodb.net/web15bkend?retryWrites=true&w=majority"
  );
};

//user Schema
const userSchema =new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    
})

app.listen(8080, async()=>{
    try
    {
        await connect();
    }catch(er){
        console.log("error",er)
    }
   console.log("Listning on Port 8080")
})