let mongoose = require('mongoose')
let mySchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    sex:String,
    password:String,
    contact:String
})

module.exports=mongoose.model('labs',mySchema)