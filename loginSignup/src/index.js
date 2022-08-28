const express = require("express");

const connect=require("./configs/db");

const userController=require("./controllers/user.controller")

const {login,register}= require("./controllers/auth.controller")

const app = express();

app.use(express.json());



app.use("/users",userController);

app.post("/register",register);
app.post("/login",login);

app.listen(8080, async()=>{
    try
    {
        await connect();
        console.log("Listning on Port 8080")
    }catch(er){
        console.log("error",er)
    }
   
})