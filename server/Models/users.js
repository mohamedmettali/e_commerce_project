const mongoose = require("mongoose")
const schema = mongoose.Schema

const userSchema = new schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type:  String,
        require: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})

const User = mongoose.model("users", userSchema)
module.exports = User


