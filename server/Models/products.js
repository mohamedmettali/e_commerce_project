const mongoose = require("mongoose")
const schema = mongoose.Schema

const productSchema = new schema({
    image: {
        type: String,
    },
    
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type:  String,
        require: true
    },
    stockQuantity: {
         type: String, 
         require: true },
})

const Product = mongoose.model("products", productSchema)
module.exports = Product