const  jwt = require('jsonwebtoken')
const UserModel = require('../models/user')

const Authrole = (roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(rq.data1.roles)){
            return next(res.redirect('/admin/dashboard'))
        }
        next()
    }
    
}


module.exports = Authrole