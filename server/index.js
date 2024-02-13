const express = require("express")
const app = express()
const connectDB = require("./Config/connectDB")
const path = require("path");

connectDB()

app.use(express.json())

const userRoute = require("./Routes/userRoute")
const productRoute = require("./Routes/productRoute")
app.use("/users", userRoute)
app.use("/products", productRoute)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(5000, (err)=>{
    err? console.error(err): console.log("server is running on 5000")
})