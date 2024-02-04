const mongoose = require("mongoose")
const schema = mongoose.Schema

const productSchema = new schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type:  Number,
        require: true
    },
    stockQuantity: {
         type: Number, 
         require: true },
})

const Product = mongoose.model("products", productSchema)
module.exports = Product