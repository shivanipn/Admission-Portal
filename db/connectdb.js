const mongoose = require('mongoose')

const connectdb = ()=>{
    con="mongodb+srv://shivani121:shivi888@cluster0.jshoh9t.mongodb.net/AdmissionPortal"

    //return mongoose.connect('mongodb://localhost:27017/blog_project') //mongodb host name
    return mongoose.connect(con)
    .then(()=>{
        console.log('connected successfully')
    }).catch((err)=>{
        console.log(err)
    })

}
module.exports = connectdb
