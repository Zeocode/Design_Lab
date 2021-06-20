let express = require('express')
let app = express()
let mongoose = require('mongoose')
let myModel = require('./model/TestCol.js')

mongoose.connect('mongodb+srv://sourav123:Nemesis@cluster0.66rpt.mongodb.net/designlab?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useCreateIndex: true
  }
);


app.get('/search/:id', function(req,res){
    myModel.find({_id:req.params.id}).then((result)=>{
        res.status(200).json(result)
    }).catch(err=>{console.log(err)})
});

app.listen(4799);


