var myApp = require('express');
var app=myApp();
var mongooseApp = require('mongoose');
var myModel=require('./TestCol');
var bodyParser=require('body-parser');
var mybodyParser=bodyParser.json();
var mycrypto=require('crypto');
var key="password";
var algo='aes256';
mongooseApp.connect('mongodb+srv://sourav123:Nemesis@cluster0.66rpt.mongodb.net/designlab?retryWrites=true&w=majority',
    {useNewUrlParser : true,
    useUnifiedTopology : true}
).then(()=>{
    console.log("System Connected")
});

app.post('/postenc',mybodyParser,function(req,res){
    var myCipher= mycrypto.createCipher(algo,key);

    // encrypt the password Advanced Encryption Standard 256 using UTF8 & hex 
    var encryptedPassword=myCipher.update(req.body.password,'utf8','hex')
    +myCipher.final('hex');

    const newdata=new myModel({
        _id: mongooseApp.Types.ObjectId(),
        name:req.body.Myname,
        email:req.body.Myemail,
        password:encryptedPassword,
    });
    newdata.save().then((result)=>{
        res.status(201).json(result)
    })

    .catch(err=>console.log(err))

})
app.listen(4799)