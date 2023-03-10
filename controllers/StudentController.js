const StudentModel = require("../models/student ");

class StudentController {
  static About = async (req, res) => {
    const { name } = req.data1;
    res.render("front/about", { n: name });
  };
  static login = async (req, res) => {
    res.render("front/login", {
      message: req.flash("success"),
      error: req.flash("error"),
    });
  };
  static dashboard = async (req, res) => {
    try {
      const { name, email } = req.data1;
      const btech = await StudentModel.findOne({
        Filledemail: email,
        course: "B.Tech",
      });
      // console.log(btech)
      const MTECH = await StudentModel.findOne({
        Filledemail: email,
        course: "M.Tech",
      });
      const mca = await StudentModel.findOne({
        Filledemail: email,
        course: "M.C.A",
      });
      res.render("admin/dashboard", {
        n: name,
        e: email,
        b: btech,
        mt: MTECH,
        m: mca,
      });
    } catch (err) {
      console.log(err);
    }
  };
  static Course_Regi = async (req, res) => {
    const { name, email } = req.data1;

    //  const user = await StudentModel.findOne()
    //  const {name,email} = req.data1
    res.render("admin/regi", { message: req.flash("error"), n: name ,});
  };
  static Display1 = async (req, res) => {
    const { name,email } = req.data1;
    const data = await StudentModel.findOne({ Filledemail:email,course: "M.C.A" });

    // console.log(data)
    res.render("front/SingleData", {ViewData:data, n: name });
  };
  static Course = async (req,res) => {
    const { name } = req.data1;

    // const data2 = await StudentModel.findOne()
    res.render("admin/mtech", { message: req.flash("error"), n: name });
  };
  static Display2 = async (req, res) => {
    const { name,email } = req.data1;
    const data = await StudentModel.findOne({Filledemail:email, course: "M.Tech" });

    //  console.log(data)
    res.render("front/SingleData3", { ViewData:data, n: name });
  };
  static BCourse = async (req, res) => {
    const { name } = req.data1;
    res.render("admin/btech", { message: req.flash("error"), n: name });
  };
  static Display3 = async (req, res) => {
    const { name,email } = req.data1;
    const data = await StudentModel.findOne({ course: "B.Tech",Filledemail:email });

    // console.log(data)
    res.render("front/SingleData2", { ViewData:data, n: name });
  };
  // static AllData = async (req, res) => {
  //   try {
  //     const { email, name } = req.data1;
  //     const data = await StudentModel.find({ Filledemail: email });
  //     res.render("admin/AllData", { d: data, n: name });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  static GetDisplay = async (req, res) => {
    const { name,email } = req.data1;
    const data = await StudentModel.find({ Filledemail:email });

    //  console.log(data)
    res.render("admin/Display", { d: data, n: name });
  };

  static View = async (req, res) => {
    const { name } = req.data1;
    const data = await StudentModel.findById(req.params.id);
    //  console.log(req.params.id)
    //  console.log(data)
    res.render("admin/view", { ViewData: data, n: name });
  };
  static Edit = async (req, res) => {
    const { name } = req.data1;
    const data = await StudentModel.findById(req.params.id);
    res.render("admin/edit", { editdata: data, n: name });
  };
  static ADisplay = async (req, res) => {
    const { name } = req.data1;
    const data = await StudentModel.find();

    // console.log(data)
    res.render("admin/ADisplay", { d: data, n: name });
  };
  static update = async (req, res) => {
    // res.render('admin/edit',{editdata:data})
    // console.log(req.body)
    // console.log(req.params.id)
    try {
      const result = await StudentModel.findByIdAndUpdate(req.params.id, {
        Firstname: req.body.Firstname,
        lastname: req.body.lastname,
        Mothername: req.body.Mothername,
        Fathername: req.body.Fathername,
        Adderess: req.body.Adderess,
        mobile: req.body.mobile,
        DOB: req.body.DOB,
        pincode: req.body.pincode,
        course: req.body.course,
        college: req.body.college,
        branch: req.body.branch,
        email: req.body.email,
      });
      await result.save();
      res.redirect("/admin/display");
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports=StudentController
