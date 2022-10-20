const dataController = require("../controllers/data.controller");
const accessValidation = require("../middlewares/auth.jwt");
const dataValidator = require("../middlewares/validateData");

module.exports = (app) => {
    // app.get("/iot/api/v1/data/", [accessValidation.verifyToken], dataController.getData);

    app.get("/iot/api/v1/data/", dataController.getData);

    app.get("/iot/api/v1/allData/", [accessValidation.verifyToken, accessValidation.isAdmin], dataController.findAllData)

}