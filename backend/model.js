module.exports = function(req,res,next){
    console.log("Currently Subscriber is on that page",req.originalUrl)
    next()
}