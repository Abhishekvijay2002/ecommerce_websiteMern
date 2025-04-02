
const userModel = require("../models/userModel")
const { createToken } = require("../Utilities/generateToken")
const {hashPassword, comparePassword} = require("../Utilities/passwordUtilities")


const adminregister = async(req,res)=>{
   try {
     const {name,email,password} =req.body
     if( !name||!email || !password){
        return res.status(400).json({error:"all fields are Required"})
     }

const Userexist =await userModel.findOne({email : email})

if(Userexist){
    return res.status(400).json({error:"User already exist with this email"})
}
const hashedPassword = await hashPassword(password)

const newAdmin = new userModel({
name,email,password:hashedPassword ,role : "admin"
   
})
 const saved = await newAdmin.save()
 if(saved){
   return res.status(201).json({message:"User created successfully"})
 }
   } catch (error) {
    console.log(error)
    res.status(error.status || 500).json({error :error.message || "Internal Server Error"})
   }
}
const adminlogin = async(req,res)=>{
   try {
      const {email,password} = req.body
      if(!email || !password){
         return res.status(400).json({error:"all fields are Required"})
      }
      const adminExist= await userModel.findOne({email})
      if(!adminExist){
         return res.status(400).json({error:"User not found with this email"})
      }
const passwordMatch =await comparePassword(password,adminExist.password)
if(!passwordMatch){
   return res.status(400).json({error:"Invalid password"})
   }
   const token = createToken(adminExist.id ,"admin")
   res.cookie("admin_token",token)
   res.status(200).json({message : "Adminlogin suceesful", user:adminExist})

   } catch (error) {
      console.log(error)
      res.status(error.status || 500).json({error :error.message || "Intenal Server Error"})
     }
   
}
const adminLogout = async (req, res) => {
    try {
       res.clearCookie("admin_token");
       res.status(200).json({ message: "Admin logout successful" });
    } catch (error) {
       console.log(error);
       res.status(500).json({ error: "Internal Server Error" });
    }
 };
 
 


module.exports = {
    adminregister , adminlogin ,adminLogout
}