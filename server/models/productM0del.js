const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true,
        unique : true
    },
    description: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    stock: {
        type:Number,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    image :
    {
        type:String,
        required:true,
    },
    // seller : {
    //     type: mongoose.Schema.Types.ObjectId,ref: "users",
    //     required: true
    // }
},{timestamps: true})

module.exports = mongoose.model('products', productSchema);