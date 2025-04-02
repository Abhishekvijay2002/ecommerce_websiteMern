const moongoose = require('mongoose')


const orderSchema = new moongoose.Schema(
    {
        userId: {
            type: moongoose.Schema.Types.ObjectId,
            ref: 'users', required: true
        },
        product: [
            {
                productid: {
                    type: moongoose.Schema.Types.ObjectId,
                    ref: 'products',
                    required: true,
                },
                price: {
                    type: Number,
                    required: true,
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1,
                }
            },
        ],
        totalamount : {
            type: Number,
            required: true
            },
            orderstatus: {
                type: String,
                enum: ['pending', 'shipped', 'delivered','cancelled'], default: 'pending',
    },
    },
    {timestamps: true}

)

module.exports = moongoose.model('orders', orderSchema);