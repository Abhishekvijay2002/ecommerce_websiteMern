const { register, login, Logout, getuser, updateuser, deleteUser } = require('../controller/userController')
const authuser = require('../middleware/authuser')
// const { verifyToken } = require('../../Utilities/verifyToken')

const userRouter = require('express').Router()

userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.post("/logout",Logout)
userRouter.get("/getuser",authuser,getuser)
userRouter.put("/update",authuser,updateuser)
userRouter.delete("/delete",authuser,deleteUser)

module.exports = userRouter;