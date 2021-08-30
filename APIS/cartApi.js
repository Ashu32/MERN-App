const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const cartApiObj = express.Router()
const multerObj=require("./middlewares/addImage")
const checkToken=require("./middlewares/verifyToken")
//body parser middleware
cartApiObj.use(express.json())

let cartCollection
//get productCollection obj
cartApiObj.use((req,res,next)=>{
    cartCollection = req.app.get('cartCollection')
    
    next()
})

//add product to cart
cartApiObj.post("/addtocart",expressAsyncHandler(async (req,res)=>{
    const cartObj = req.body;
    await cartCollection.insertOne(cartObj)
    //send res
    res.send({message:"New product added"})
}))

//get products
cartApiObj.get("/getproduct",checkToken,expressAsyncHandler(async (req,res)=>{
    
    let products= await cartCollection.find().toArray()
    console.log(products);
    res.send({message:"success",payload:products})
}))

module.exports = cartApiObj