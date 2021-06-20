let express = require('express')
let myApp = express()
let mongoose = require('mongoose')
let TestCol = require('./model/TestCol.js')

mongoose.connect('mongodb+srv://sourav123:Nemesis@cluster0.66rpt.mongodb.net/designlab?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useCreateIndex: true
  }).then(()=>{
    console.log("MongoDB Connected")
  })


const data = new TestCol({
    _id: new mongoose.Types.ObjectId(),
    name:"Satyajit",
    email:"satyajit@gmail.com"
});

data.save().then((result)=>{
    console.log(result)
})
.catch(err=>console.log(err))