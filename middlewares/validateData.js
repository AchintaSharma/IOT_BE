const Data = require("../models/data.model");

validateDataBody = async (req, res, next) => {
    if(!req.body.temperature) {
        return res.status(400).send({
            message : "temperature not provided"
        })
    } 
    if(!req.body.weight) {
        return res.status(400).send({
            message : "weight not provided"
        })
    }
    if(!req.body.ambientTemp) {
        return res.status(400).send({
            message : "ambient temperature not provided"
        })
    }
    if(!req.body.camera1FilePath) {
        return res.status(400).send({
            message : "camera 1 file path not provided"
        })
    }
    if(!req.body.camera2FilePath) {
        return res.status(400).send({
            message : "camera 2 file path not provided"
        })
    }
    if(!req.body.camera3FilePath) {
        return res.status(400).send({
            message : "camera 3 file path not provided"
        })
    }
    if(!req.body.camera4FilePath) {
        return res.status(400).send({
            message : "camera 4 file path not provided"
        })
    }
    next();
}

module.exports = {
    validateDataBody : validateDataBody
}