const express = require("express");
const router = express.Router();
const product = require("../Models/products");
const fs = require("fs");
const path = require("path");
const multer = require("multer");



const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, "./uploads/");
    },
    filename(req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });

router.post("/addProduct", async (req,res)=>{
  try{
      const newProduct = {
        image: req.body.image,  
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stockQuantity: req.body.stockQuantity
      }
      const result = await product.create(newProduct)
      res.send({msg: "product added !", result})
      } catch (error){
          console.log(error);
          res.status(500).json("Internal server error", error)
      } 
  })
  
  router.get("/getProducts", async (req, res) =>{
  try{
      const result = await product.find()
      res.send(result)
  
  }
   catch (error){
      console.log(error);
      res.status(500).json("Internal server error", error)
  
  }
  })
  
  router.get("/getProducts/:id", async (req, res) =>{
    try{
      const id = req.params.id
        const result = await product.findById({_id:id})
        res.send(result)
    
    }
     catch (error){
        console.log(error);
        res.status(500).json("Internal server error", error)
    
    }
    })
  
      router.delete("/deleteProduct/:id", async (req, res) =>{
          try{
              const id = req.params.id;
              const result = await product.findByIdAndDelete({_id:id})
              res.send({msg: "Product deleted !", result})
          
          }
           catch (error){
              console.error(error);
              res.status(500).json("Internal server error", error)
          
          }
          })
  
          router.put("/updateProduct/:id", async (req, res) =>{
              try{
                  const id = req.params.id;
                  const result = await product.findOneAndUpdate({_id:id}, {$set: req.body})
                  res.send({msg: "Product updated !", result})
              
              }
               catch (error){
                  console.error(error);
                  res.status(500).json("Internal server error", error)
              
              }
              })  

              router.post("/", upload.single("image"), (req, res) => {
                if (!req.file) {
                  return res.status(400).send("No file uploaded.");
                }
                res.send(`/uploads/${req.file.filename}`);
              });
              
              
              router.get("/images/:productId", async (req, res) => {
                const { productId } = req.params;
              
                try {
                  const Product = await product.findById(productId);
                  if (!Product) {
                    return res.status(404).send("Product not found");
                  }
              
                  if (!Product.image) {
                    return res.status(404).send("Product does not have an image");
                  }
              
                  const normalizedPath = path.normalize(Product.image);
                  const filePath = path.join(__dirname, "..", normalizedPath);
              
                  console.log("User Image Path:", Product.image);
                  console.log("Normalized Path:", normalizedPath);
                  console.log("Full File Path:", filePath);
              
                  if (fs.existsSync(filePath)) {
                    res.sendFile(filePath);
                  } else {
                    res.status(404).send("Image not found");
                  }
                } catch (err) {
                  console.error(err);
                  res.status(500).send("Internal server error");
                }
              });    

              
  

module.exports = router;