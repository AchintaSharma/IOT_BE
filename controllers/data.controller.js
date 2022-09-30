const { stdout } = require("process");
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


exports.getData = async (req, res) => {
    const { exec } = require('child_process');

    const foo = function (cb) {
       exec('python ./dummydata/main.py', (err, stdout, stderr) => {
            if (err) {
                console.error(`exec error: ${err}`);
                return cb(err);
            }
            console.log(`stdout: ${stdout}`);
            cb(null, { stdout, stderr });
        });
        
    };

    foo(async function (err, { stdout, stderr }) {
        
        let data = JSON.parse(stdout); 
        const dataCreated = await Data.create(data);

        return res.status(200).send(dataCreated);
    });
}