const mongoose = require("mongoose");


const cameraSchema = new mongoose.Schema({
    camera1url : {
        type : String,
        required : true
    },
    camera2url : {
        type : String,
        required : true
    },
    camera3url : {
        type : String,
        required : true
    },
    camera4url : {
        type : String,
        required : true
    }
});

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
    cameraUrl : cameraSchema
}, {timestamps : true, versionKey : false});

module.exports = mongoose.model('Data', dataSchema);