const adminRouter = require("./adminroutes")
const cartRouter = require("./cartroutes")
const orderrouter = require("./orderroutes")
const productRouter = require("./productroutes")
const reviewRouter = require("./reviewroutes")
const sellerrouter = require("./sellerroutes")
const userRouter = require("./userRoutes")

const manageRouter = require("express").Router()

manageRouter.use("/user",userRouter)
manageRouter.use("/admin",adminRouter)
manageRouter.use("/product",productRouter)
manageRouter.use("/cart",cartRouter)
manageRouter.use("/order",orderrouter)
manageRouter.use("/review",reviewRouter)
manageRouter.use("/seller",sellerrouter)


module.exports = manageRouter