
const express = require('express')
const AdminController = require('../controllers/AdminController')
const  DeshController = require('../controllers/DashController')
const router = express.Router()
const StudentController = require('../controllers/StudentController')
const UserController = require('../controllers/UserController')
const CheckUserAuth = require('../Middleware/auth')
const StudentModel = require('../models/student ')


//student
router.get("/front/about",CheckUserAuth,StudentController.About)
router.get("/",StudentController.login)
router.get('/admin/dashboard',CheckUserAuth,StudentController.dashboard)
router.get('/admin/regi',CheckUserAuth,StudentController. Course_Regi)
// router.get('/admin/mtech',StudentController.Course)
router.get("/admin/mtech",CheckUserAuth,StudentController.Course)
router.get("/admin/btech",CheckUserAuth,StudentController.BCourse)
router.get("/front/SingleData",CheckUserAuth,StudentController.Display1)
router.get("/front/SingleData3",CheckUserAuth,StudentController.Display2)
router.get("/front/SingleData2",CheckUserAuth,StudentController.Display3)
router.get("/admin/view/:id",CheckUserAuth,StudentController.View)
router.get("/admin/edit/:id",CheckUserAuth,StudentController.Edit)
router.get('/admin/Display',CheckUserAuth,StudentController.GetDisplay)
router.post("/admin/updateCou/:id",CheckUserAuth,StudentController.update)




//User
router.get("/admin/register",UserController.register)
router.post("/register",UserController.Register) 
router.post("/verifylogin",UserController.VerifyLogin)
// router.get("/logout",UserController.Logout)
//Admin
router.get("/Admin1/Dashboard1",CheckUserAuth,AdminController.Dashboard)
router.get("/admin/AdminDisplay",CheckUserAuth,AdminController. AdminDisplay )
router.get("/admin/ADisplay",CheckUserAuth,StudentController.ADisplay)
router.get("/admin/AdminDelete/:id",CheckUserAuth,AdminController.AdminDelete)

//deshcon
// router.get('/admin/regi', DeshController.Stud)

router.post('/regi',CheckUserAuth, DeshController.btcRegi)
router.post('/RR',CheckUserAuth, DeshController.btc)
router.post('/BTECH',CheckUserAuth, DeshController.btec)
router.get('/logout', DeshController.Logout)



//Display



module.exports=router