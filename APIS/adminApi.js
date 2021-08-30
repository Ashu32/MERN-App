const express = require("express")
const adminApiObj = express.Router()
const expressAsyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
adminApiObj.use(express.json())
//get adminCollection
let adminCollection;
adminApiObj.use((req,res,next)=>{
    adminCollection = req.app.get('adminCollection')
    next()
})

adminApiObj.post('/login',expressAsyncHandler(async (req,res)=>{
    //get user credentials obj
    let adminCredentialsObj = req.body;
    //find user by username
    let user =  await adminCollection.findOne({username:adminCredentialsObj.username})
    //if user is not there
    
    if(user === undefined){
        res.send({message:"Invalid username"})
    }
    else{
        //compare passwords
        // let status = await bcryptjs.compare(userCredentialsObj.password,user.password)
        let status =adminCredentialsObj.password === user.password
        //if not equal
        if(status === false){
            res.send({message:"Invalid Password"})
        }
        //if status is true
        else{
            //create and send token
            let signedToken = await jwt.sign({username:user.username},process.env.SECRET,{expiresIn:10})
            //send token in res
            res.send({message:"success", token:signedToken, user:user})
        }
    }

}))

module.exports = adminApiObj