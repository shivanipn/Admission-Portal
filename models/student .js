const mongoose = require('mongoose')
const StudentSchema = new mongoose.Schema({  //object
   Firstname:{ //feild
        type:String,
        Required:true
    },
    lastname:{ //feild
        type:String,
        Required:true
    },
    Mothername:{ //feild
        type:String,
        Required:true
    },
    Fathername:{ //feild
        type:String,
        Required:true
    },
    Adderess:{ //feild
        type:String,
        Required:true
    },
    // gender:{ //feild
    //     type:String,
    //     Required:true
    // },
    // state:{ //feild
    //     type:String,
    //     Required:true
    // },
    // city:{ //feild
    //     type:String,
    //     Required:true
    // },
    mobile:{
        type:String,
        Required:true
    },
   
    DOB:{ //feild
        type:String,
        Required:true
    },
    pincode:{ //feild
        type:String,
        Required:true
    },
    course:{ //feild
        type:String,
        Required:true
    },
   
    email:{
        type:String,
        Required:true
    },
    college:{
        type:String,
        Required:true
    },
    branch:{
        type:String,
        Required:true
    },
   Filledemail:{
        type:String,
        Required:true
    },
    Status:{
        type:String,
        Default:"Pending"
    }
   
   
    
},

{timestaps:true})

const StudentModel =mongoose.model('student',StudentSchema)
module.exports = StudentModel