
const { create } = require("../models/user.model")
const User=require("../models/user.model")
const jwt = require('jsonwebtoken');
 const genarateToken=(user)=>{
    return jwt.sign({user},"")
  }
const register= async(req,res)=>{
 
  try{
    let user=await User.findOne({email : req.body.email})
        if(user){
            return res.status(400).send({message : "Email alrady exists"})
        }
    
        user=await User.create(req.body);
      let token=genarateToken(user);
        return res.status(200).send(user,token)

  }catch(er){

    res.status(400).send({message:err.message})
  }
}





const login= async(req,res)=>{
    try{

      const user = await User.findOne({email:req.body.email});

      if(!user){
        return res.status(400).send("wrong Email or Password")
      }
      // return res.status(200).send("login")
      
  
    }catch(er){
  
      res.status(400).send({message:err.message})
    }
  }

  module.exports={login,register}