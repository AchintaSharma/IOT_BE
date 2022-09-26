const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    temperature : {
        type : String,
        required : true
    }, 
    weight : {
        type : String,
        required : true
    },
    ambientTemp : {
        type : String,
        required : true
    },
    camera1FilePath : {
        type : String,
        required : true
    },
    camera2FilePath : {
        type : String,
        required : true
    },
    camera3FilePath : {
        type : String,
        required : true
    },
    camera4FilePath : {
        type : String,
        required : true
    }
}, {timestamps : true, versionKey : false});

module.exports = mongoose.model('Data', dataSchema);