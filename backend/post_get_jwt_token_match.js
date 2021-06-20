var myApp = require('express');
var app=myApp();
var mongooseApp = require('mongoose');
var myModel=require('./model/TestCol');
var bodyParser=require('body-parser');
var mybodyParser=bodyParser.json();
var mycrypto=require('crypto');
var key="password";
var algo='aes256';
var jwt=require('jsonwebtoken')
var jwtkey='jwtkey';
mongooseApp.connect('mongodb+srv://sourav123:Nemesis@cluster0.66rpt.mongodb.net/designlab?retryWrites=true&w=majority',
    {useNewUrlParser : true,
    useUnifiedTopology : true}
).then(()=>{
    console.log("System Connected")
}); 

// to post any token may be for signup request
app.post('/postjwt', mybodyParser, function (req, res) {
    myModel.findOne({ email: req.body.email }).then((data) => {
        var decipher = mycrypto.createDecipher(algo, key);
        var decryptedPassword = decipher.update(data.password, 'hex', 'utf8' )+ 
        decipher.final('utf8');
        if(decryptedPassword==req.body.password){
            jwt.sign({data},jwtkey,{expiresIn:'180s'},(err,token)=>{
                res.status(200).json({token})
            })
        }
        console.log("Password Matched ",data.password);        
    });
})


app.get('/getjwt',verifyToekn,function(req,res){
    myModel.find().then((result)=>{
        res.status(200).json(result)
    })
})
// creating verification token in middleware & apply the verify token in get function
function verifyToekn(req,res,next){
    const bearerHeader=req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined')
    {
        const bearerToken=bearerHeader.split(' ');
        console.log(bearerToken[1]);
        req.token=bearerToken[1];
        // jwt token verification
        jwt.verify(req.token, jwtkey, (err, authData)=>{
            if(err){
                res.json({result:err})
            }
            else{
                next();
                res.json({"result":"Token Present"})
            }
        })
    }
        
    else{
        res.send({"result":"Token Missing"})
    }
}

app.listen(4444)
