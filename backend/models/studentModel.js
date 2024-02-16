const mongoose = require("mongoose");

// Schema

const studentSchema= new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    age :{
        type: Number,
        unique : true,
    }
},{timestamps:true});

const studentData = mongoose.model('studentData',studentSchema);

module.export = studentData;