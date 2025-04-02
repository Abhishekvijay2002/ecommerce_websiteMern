const { adminregister, adminlogin, adminLogout } = require('../controller/adminController');


const adminRouter = require('express').Router()

adminRouter.post("/register",adminregister)
adminRouter.post("/login",adminlogin)
adminRouter.post("/logout",adminLogout)

module.exports = adminRouter;