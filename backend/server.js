// let http=require('http');


// http.createServer(function(req,res){
//     res.writeHead(200,{'Contain-Type':'application\json'})
//    res.write("Hello, my name is Sourav Dutta");
//    res.end();
// }).listen(4700) 

var addon=require('./add')
console.log(addon.addFunctions(9,10))

