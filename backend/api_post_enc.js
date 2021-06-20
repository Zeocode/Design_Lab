var myApp = require ('express') ; 
var app=myApp();
var mongooseApp = require('mongoose'); 
var TestCol=require('./model/TestCol'); 
var bodyParser=require('body-parser'); 
var mybodyParser=bodyParser.json(); 
var mycrypto=require('crypto'); 
var key="password"; 
var algo='aes256'; 
mongooseApp.connect('mongodb+srv://sourav123:Nemesis@cluster0.66rpt.mongodb.net/designlab?retryWrites=true&w=majority',
{
    useNewUrlParser : true, 
    useUnifiedTopology : true} 
    ).then(()=>{ console.log("System Connected") 
}) ; 



app.post('/postenc',mybodyParser,function(req,res)
{ 
    name = req.body.name;
    email = req.body.email;

    var myCipher= mycrypto.createCipher (algo,key); 
// encrypt the password Advanced Encryption Standard 256 using UTF8 & hex 
var encryptedPassword=myCipher.update(req.body.password,'utf8','hex') +myCipher.final('hex'); 
password = encryptedPassword;
// to show the details & encryptedPassword in terminal 
console.log(req.body,encryptedPassword); 
// to show the encrypted password as response in nodemon 
res.end(encryptedPassword); 

const data = new TestCol({
    _id: new mongooseApp.Types.ObjectId(),
    name:this.name,
    email:this.email,
    password: this.password
});

data.save().then((result)=>{
    console.log(result)
})
.catch(err=>console.log(err))
}) 

app.listen(4799) 
