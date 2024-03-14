const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentInfoSchema = new Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    total_marks : {type : Number},
    gender : {type : String},
    fName : {type : String},
    MName : {type : String},
    Address:{
        address:{type:String,required:true},
        city:{type:String,required:true},
        postalCode:{type:String,required:true},
    }
})

exports.StudentInfoModel = mongoose.model("StudentInfoModel",studentInfoSchema);