let express = require('express')
let myApp = express()
let mongoose = require('mongoose')
let models = require('./model/connect.js')

mongoose.connect('mongodb+srv://sourav123:Nemesis@cluster0.66rpt.mongodb.net/designlab?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(()=>{
    console.log("MongoDB Connected")
  })


models.find({},function(err,cseA)
{
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log(cseA)
    }
})