const adminRouter = require("./adminroutes")
const cartRouter = require("./cartroutes")
const orderrouter = require("./orderroutes")
const productRouter = require("./productroutes")
const reviewRouter = require("./reviewroutes")
const userRouter = require("./userRoutes")

const manageRouter = require("express").Router()

manageRouter.use("/user",userRouter)
manageRouter.use("/admin",adminRouter)
manageRouter.use("/product",productRouter)
manageRouter.use("/cart",cartRouter)
manageRouter.use("/order",orderrouter)
manageRouter.use("/review",reviewRouter)


module.exports = manageRouter