const  jwt = require('jsonwebtoken')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt');
 class UserController{
    static register = async (req,res)=>{
        try{
            res.render('admin/register',{message:req.flash('error')})

        }catch(err){
            console.log(err)
        }
    }
    static Register = async(req,res)=>{
    // console.log(req.body)
    const {name,email,password,confirm_password} = req.body
    const admin = await UserModel.findOne({email:email})
    if(admin){
        req.flash('error','email already exists')
        return res.redirect('admin/register')
    }
    else{
        if(name && email && password && confirm_password){
            if(password == confirm_password){
                try{
                    const hashpassword = await bcrypt.hash(password,10)
                    const result = await UserModel({
                        name:name,
                        email:email,
                        password:hashpassword,
                    })
                    await result.save()
                    req.flash('Success','Registration successfully please login')
                    return res.redirect('/')

                }catch(err){
                    console.log(err);
                }

            }else{
                req.flash('error','password and confirm password  does not match')
                return res.redirect('admin/register')

            }
            
        } 
        
        else{
            req.flash('error','All field are required')
            return res.redirect('admin/register')

        }
    }
    }
    static VerifyLogin = async(req,res)=>{
        try{
            const {email,password} = req.body
            if(email && password){
                const user = await UserModel.findOne({email:email})
                if(user !=null){
                    const isMatched = await bcrypt.compare(password,user.password)
                    if((user.email === email) && isMatched){
                        if(user.role == 'user'){
                            const token = jwt.sign({ userId: user._id}, 'shivani12345');
                            // console.log(token)
                            res.cookie('token',token)
                            res.redirect('admin/dashboard')
    
                        }
                        if(user.role == 'admin'){
                            const token = jwt.sign({ userId: user._id}, 'shivani12345');
                            // console.log(token)
                            res.cookie('token',token)
                            res.redirect('admin/AdminDisplay')
    
                        }
                        //verify token
                        const token = jwt.sign({ userId: user._id}, 'shivani12345');
                        // console.log(token)
                        res.cookie('token',token)
                        res.redirect('admin/dashboard')


                    }else{
                        req.flash('error','Email or password is not valid')
                       return res.redirect('/')

                    }

                }else{
                    req.flash('error','you are not Registered User!')
                    return res.redirect('/')
                }

            }else{
                req.flash('error','All field are required')
            return res.redirect('/')

            }

        }catch(err){
         console.log(err);
        }
    }
  


}



module.exports = UserController