//create express app
const express = require("express")
const app=express();
//configure dotenv
//the config() provides all env variables in process.env
require("dotenv").config()

//import APIS objects
const userApiObj=require("./APIS/userApi")
const adminApiObj=require("./APIS/adminApi")
const productApiObj=require("./APIS/productsApi")
const cartApiObj=require("./APIS/cartApi")
//use userApiObj when path starts with
app.use("/users",userApiObj)
app.use("/admin",adminApiObj)
app.use("/products",productApiObj)
app.use("/carts",cartApiObj)


//import path module
const path = require("path")

//connect build of react app with express
app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})















//import mongodb module
const mongoClient = require("mongodb").MongoClient;

//get db url
const dbUrl = process.env.DATABASE_URL;

//connect
mongoClient.connect(dbUrl,(err,client)=>{
    if(err){
        console.log("err in db connect",err);
    }
    else{
        //get obj of database
        let databaseObject = client.db('client')
        //get objects of collection
        let userCollection = databaseObject.collection('user-collection')
        let adminCollection = databaseObject.collection('admin-collection')
        let cartCollection = databaseObject.collection('cart-collection')
        let productCollection = databaseObject.collection('products-collection')

        //set to app object
        app.set('userCollection',userCollection)
        app.set('adminCollection',adminCollection)
        app.set('cartCollection',cartCollection)
        app.set('productCollection',productCollection)

        console.log("Connected to DB");
    }
})





//error handling middleware
app.use((err,req,res,next)=>{
    
    res.send({message:"error",reason:err.message})
})

//assign port
const PORT = process.env.PORT
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))