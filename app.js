const express = require('express')
const app = express()
//  const port=process.env.PORT || 3000
  const port =4000
//  var jwt = require('jsonwebtoken')
const web =require("./routes/web")
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash');
const cookieParser = require('cookie-parser')
app.use(cookieParser())
//  const dotenv= require('dotenv')
//  dotenv.confif({path:'.env'})


app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
  
}));

app.use(flash());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(express.static('public'))
//routes
app.use("/",web)
app.set("view engine","ejs")

const connectdb = require('./db/connectdb')
connectdb()





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

 

  





