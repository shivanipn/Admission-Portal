const StudentModel = require("../models/student ")

class AdminController{
 static Dashboard = async(req,res)=>{
    res.render('Admin1/Dashboard1')
 }
 static AdminDisplay = async(req,res)=>{
   const {name} = req.data1
   res.render('admin/AdminDisplay',{n:name})
}
static AdminDelete = async(req,res)=>{
   // console.log(req.params.id)
   try{
       const user = await StudentModel.findById(req.params.id)
      // const image_id = user.image.public_id;
       // console.log(image_id)
      //  await cloudinary.uploader.destroy(image_id)
       const result = await StudentModel.findByIdAndDelete(req.params.id)
       res.redirect('/admin/ADisplay')
   }catch(err){
       console.log(err)
   }
}

}


module.exports = AdminController