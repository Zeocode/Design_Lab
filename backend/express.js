const express = require('express')
const myApp = express()
const port = 3000
var chkUrl=require('./model.js')
var router = express.Router()

// var chkUrl=function(req,res,next){
//     console.log("Currently Subscriber is on that page",req.originalUrl)
//     next()
// }

//myApp.use(chkUrl)

myApp.get('/', (req, res) => {
  res.send('Welcome to NSEC!')
})

myApp.get('/login', (req, res) => {
    //res.send('Welcome to Login Page!')
    res.sendFile(__dirname+'/login.html')
})

router.get('/signup', chkUrl, (req, res) => {
    //res.send('Welcome to Signup Page!')
    res.sendFile(__dirname+'/signup.html')
})


myApp.use('/',router)
myApp.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})