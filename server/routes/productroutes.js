
const { createproduct, listProducts, productDetails, updateProduct, deleteProduct } = require('../controller/productcontroller')
const authAdmin = require('../middleware/authadmin')
const upload = require("../middleware/multer")

const productRouter = require('express').Router()


productRouter.post("/create",authAdmin,upload.single("image"),createproduct)
productRouter.get("/getproducts",listProducts)
productRouter.get("/getdetail/:productid",productDetails)
productRouter.put("/update/:productid",authAdmin,upload.single("image"),updateProduct)
productRouter.delete("/delete/:productid",authAdmin,deleteProduct)

module.exports =productRouter