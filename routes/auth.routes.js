/**
 * Routes information
 */

const authController = require("../controllers/auth.controller");
const signUpValidator = require("../middlewares/verifyUserReqBody");

module.exports = (app) => {
    app.post("/iot/api/v1/auth/signup", [signUpValidator.validateSignUpRequestBody], authController.signup);

    app.post("/iot/api/v1/auth/signin", authController.signin);
}

