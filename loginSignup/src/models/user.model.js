const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema =new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{
    timestamps:true,
    versionKey:false
})

userSchema.pre("save",function(next){
                                //password / round
    const hash = bcrypt.hashSync(this.password, 5);
    this.password=hash;
    return next();
});
userSchema.method.cheakPassword=function(password){
  return bcrypt.compareSync(password,this.password)
}

const User=mongoose.model("user",userSchema);

module.exports=User;