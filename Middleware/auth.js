const  jwt = require('jsonwebtoken')
const UserModel = require('../models/user')
const CheckUserAuth = async(req,res,next)=>{
    const{token} = req.cookies
   
    if(!token){
        req.flash('error','Unauthorized user please login')
        return res.redirect('/') 
    }else{
        const verify_token = jwt.verify(token,'shivani12345')
        // console.log(verify_token)
        const data = await UserModel.findOne({_id:verify_token.userId})
        // console.log(data)
        req.data1= data
        next()
       
    }
   
} 

module.exports=CheckUserAuth