//create mini exp app
const express = require('express')
const expressAsyncHandler = require('express-async-handler')
const userApiObj = express.Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multerObj=require("./middlewares/addImage")
//body parser middleware
userApiObj.use(express.json())

let userCollection
//get userCollection obj
userApiObj.use((req,res,next)=>{
    userCollection = req.app.get('userCollection')
    next()
})

//user registration
userApiObj.post("/register",multerObj.single('profImg'),expressAsyncHandler(async (req,res)=>{
    //get user from req.body
   
    const newUser =JSON.parse(req.body.userObj)
    newUser.image = req.file.path;
    //check for duplicate user
    let user= await userCollection.findOne({username:newUser.username})
    //if user existed,send res as "user existed"
    if(user!== undefined){
        res.send({message:"user existed"})
    }
    //else hash password
    else{
        //hash pw
        let hashedPassword = await bcryptjs.hash(newUser.password,6)
        //replace plain pw with has pw
        newUser.password = hashedPassword
    //insert userObj to usercollection
    await userCollection.insertOne(newUser)
    //send res
    res.send({message:"success"})
    }
    
}))

//user login
userApiObj.post('/login',expressAsyncHandler(async (req,res)=>{
    //get user credentials obj
    let userCredentialsObj = req.body;
    //find user by username
    let user =  await userCollection.findOne({username:userCredentialsObj.username})
    //if user is not there
    
    if(user === undefined){
        res.send({message:"Invalid username"})
    }
    else{
        //compare passwords
        let status = await bcryptjs.compare(userCredentialsObj.password,user.password)
        //if not equal
        if(status === false){
            res.send({message:"Invalid Password"})
        }
        //if status is true
        else{
            //create and send token
            let signedToken = await jwt.sign({username:user.username},process.env.SECRET)
            //send token in res
            res.send({message:"success", token:signedToken, user:user})
        }
    }

}))














//export
module.exports = userApiObj