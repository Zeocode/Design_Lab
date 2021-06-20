const lib = require('./add')

var http=require('http');
//var data='{"Name & E-Mail":"Sourav Dutta & sourav@gmail.com"}'
var result = lib.addFunctions(4,8)
http.createServer(function(req,res){
    res.writeHead(200,{'Contain-Type':'application\json'})
    res.write(result.toString());
    res.end();
}).listen(3700)