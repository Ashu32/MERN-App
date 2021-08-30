const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const productApiObj = express.Router()
const multerObj=require("./middlewares/addImage")
const checkToken=require("./middlewares/verifyToken")
//body parser middleware
productApiObj.use(express.json())

let productCollection
//get productCollection obj
productApiObj.use((req,res,next)=>{
    productCollection = req.app.get('productCollection')
    
    next()
})

//add product
productApiObj.post("/addproduct",checkToken,multerObj.single('prodImg'),expressAsyncHandler(async (req,res)=>{
    //get productObj
    const productObj =JSON.parse(req.body.productObj)
    //add image CDN Link to productObj
    productObj.image = req.file.path;
    //save to productCollection
    await productCollection.insertOne(productObj)
    //send res
    res.send({message:"New product created"})
    
}))

//get products
productApiObj.get("/getproduct",checkToken,expressAsyncHandler(async (req,res)=>{
    
    let products= await productCollection.find().toArray()
    
    res.send({message:"success",payload:products})
}))








//export
module.exports = productApiObj