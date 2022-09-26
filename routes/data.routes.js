const dataController = require("../controllers/data.controller");
const accessValidation = require("../middlewares/auth.jwt");
const dataValidator = require("../middlewares/validateData");

module.exports = (app) => {
    app.post("/iot/api/v1/data/", [accessValidation.verifyToken, dataValidator.validateDataBody], dataController.createData);

    app.get("/iot/api/v1/data/", [accessValidation.verifyToken, accessValidation.isAdmin], dataController.findAllData)

}