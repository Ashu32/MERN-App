const jwt = require('jsonwebtoken')

const checkToken = (req,res,next)=>{
    //get Token
    let token = req.headers.authorization.split(" ")[1]

    //if token is not existed
    if(token=='null'){
        res.send({message: "Unathorised request...Please login to continue"})
    }
    //if token existed
    else {
        //validate the token
        jwt.verify(token,process.env.SECRET,(err,decodedToken)=>{
            //if token is expired,it return error
            if(err)
                res.send({message:"Session expired..relogin to continue"})
            else
                next()
        })
    }
}

module.exports = checkToken