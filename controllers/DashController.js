
const StudentModel = require('../models/student ')
class DeshController{
    // static Stud =  async(req,res)=>{
    //    res.render = ('/admin/regi',{message:req.flash('error')})

        
    // }
    static btcRegi = async (req,res)=>{
        const Filledemail=req.data1.email
        // console.log (Filledemail)
        //  console.log(req.body)
        const  {Firstname,lastname,Mothername,Fathername,Adderess,mobile, DOB,pincode,course,email,branch,college} = req.body
        const user = await StudentModel.findOne({email:email})
        if(user){
            req.flash('error','email already exits😊')
            return res.redirect('admin/regi')
           
        }
      
        else{
           
            if (  Firstname && lastname && Mothername && Fathername && Adderess && mobile && DOB && pincode && course && email && college && branch && Filledemail){
                 try{
                const result = await StudentModel ({
                    Firstname :Firstname,
                    lastname :lastname,
                    Mothername :Mothername,
                    Fathername :Fathername,
                    Adderess :Adderess,
                    mobile :mobile,
                    DOB : DOB,
                    pincode :pincode,
                    course :course,
                    email: email,
                    college:college,
                    branch:branch,
                    Filledemail:Filledemail
                })
                await result.save()
                req.flash('success','Registration successfully' )
                return res.redirect('front/SingleData')

            }catch(error){
                console.log(error)
            }

            }
            else{
                req.flash('error','All Field Are Required😶')
            return res.redirect('admin/regi')
            }
        }
    }
    
    static btec = async (req,res)=>{
        const Filledemail=req.data1.email
         console.log(req.body)
        const  {Firstname,lastname,Mothername,Fathername,Adderess,mobile, DOB,pincode,course,email,college,branch} = req.body
        const user = await StudentModel.findOne({email:email})
        if(user){
            req.flash('error','email already exits😊')
            return res.redirect('admin/mtech')
           
        }
      
        else{
            if (  Firstname && lastname && Mothername && Fathername && Adderess && mobile && DOB && pincode && course && email && college && branch && Filledemail){
                 try{
                const result = await StudentModel({
                    Firstname :Firstname,
                    lastname :lastname,
                    Mothername :Mothername,
                    Fathername :Fathername,
                    Adderess :Adderess,
                    mobile :mobile,
                    DOB : DOB,
                    pincode :pincode,
                    course :course,
                    email: email,
                    college:college,
                    branch:branch,
                    Filledemail:Filledemail
                   
                })
                await result.save()
                req.flash('success','Registration successfully' )
                return res.redirect('front/SingleData2')

            }catch(error){
                console.log(error)
            }

            }
            else{
                req.flash('error','All Field Are Required😶')
            return res.redirect('admin/mtech')
            }
        }
    }
    //btech
    static btc = async (req,res)=>{
         const Filledemail=req.data1.email
        //  console.log(req.body)
        const  {Firstname,lastname,Mothername,Fathername,Adderess,mobile, DOB,pincode,course,email,college,branch} = req.body
        const user = await StudentModel.findOne({email:email})
        if(user){
            req.flash('error','email already exits😊')
            return res.redirect('admin/btech')
           
        }
      
        else{
            if (  Firstname && lastname && Mothername && Fathername && Adderess && mobile && DOB && pincode && course && email && Filledemail){
                 try{
                const result = await StudentModel({
                    Firstname :Firstname,
                    lastname :lastname,
                    Mothername :Mothername,
                    Fathername :Fathername,
                    Adderess :Adderess,
                    mobile :mobile,
                    DOB : DOB,
                    pincode :pincode,
                    course :course,
                    email: email,
                    college:college,
                    branch:branch,
                    Filledemail:Filledemail
                })
                await result.save()
                req.flash('success','Registration successfully' )
                return res.redirect('front/SingleData3')

            }catch(error){
                console.log(error)
            }

            }
            else{
                req.flash('error','All Field Are Required😶')
            return res.redirect('admin/btech')
            }
        }
    }
    static Logout = async(req,res)=>{
        try{
            res.clearCookie('token')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }
    // static AllData = async (req, res) => {
    //     try {
    //       const { email, name } = req.data1;
    //       const data = await StudentModel.find({ Filledemail: email });
    //       res.render('/admin/Display', { d: data, n: name });
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    

    

}
module.exports = DeshController