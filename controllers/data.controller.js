const Data = require("../models/data.model");


exports.findAllData = async (req, res) => {
    try {
        const data = await Data.find();

        if (!data) {
            return res.send(400).send({
                message: "No data exists"
            })
        }

        res.status(200).send(data);
    } catch (err) {
        console.log("Error while fetching data", err.message);
    }
}


exports.createData = async (req, res) => {
    try {
        const dataObj = {
            temperature: req.body.temperature,
            weight: req.body.weight,
            ambientTemp: req.body.ambientTemp,
            camera1FilePath : req.body.camera1FilePath,
            camera2FilePath : req.body.camera1FilePath,
            camera3FilePath : req.body.camera1FilePath,
            camera4FilePath : req.body.camera1FilePath,
        }

        const dataCreated = await Data.create(dataObj)
        res.status(200).send(dataCreated)

    } catch (err) {
        console.lof("error while creating data");
    }
}