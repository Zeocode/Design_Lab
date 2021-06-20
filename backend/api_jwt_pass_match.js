var myApp = require ('express') ; 
var app=myApp();
var mongooseApp = require('mongoose'); 
var myModel=require('./model/TestCol'); 
var jwt = require("jsonwebtoken");
var jwtkey = "my_secret_key"
var bodyParser=require('body-parser'); 
var mybodyParser=bodyParser.json(); 
var mycrypto=require('crypto'); 
var key="password"; 
var algo='aes256'; 


mongooseApp.connect('mongodb+srv://sourav123:Nemesis@cluster0.66rpt.mongodb.net/designlab?retryWrites=true&w=majority',{ 
    useNewUrlParser: true, useUnifiedTopology: true
    }).then(() => {
        console.log("System Connected") 
    }); 


    app.post('/postfindenc', mybodyParser, function (req, res) {
        var decryptedPassword;
        myModel.findOne({ email: req.body.email }).then((data) => { 
            var decipher = mycrypto.createDecipher(algo, key);
            //console.log('Password is ' ,data.password); 
            decryptedPassword = decipher.update(data.password, 'hex', 'utf8' )+ decipher.final('utf8'); 

        }) ;

        if(decryptedPassword==req.body.password){

         jwt.sign((data),jwtkey,{expiresIn:'180s'},(err,token)=>{ 
             res.status(200).json({token}) 
            })
        
        console.log("Password Matched ",data.password); 
        
        }
        else
        {
            console.log("Password NOT Matched "); 
        }

        res.end();
        

    });
app.listen(4555) 
