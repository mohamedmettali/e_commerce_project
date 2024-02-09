const express = require("express");
const router = express.Router();
const product = require("../Models/products");

router.post("/addProduct", async (req,res)=>{
  try{
      const newProduct = {
        imageURL: req.body.imageURL,  
        name: req.body.name,
        description: req.body.description,
           price: req.body.price,
           stockQuantity: req.body.birthdate
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
  
  router.get("/getProduct/:id", async (req, res) =>{
      try{
          const id = req.params.id;
          const result = await product.findById({_id:id})
          res.send({msg: "Product loaded !", result})
      
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
  

module.exports = router;