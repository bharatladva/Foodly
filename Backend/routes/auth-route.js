const express = require("express");
const router = express.Router();
const authController = require("../Controllers/auth-contoller");

router.route("/").get(authController.home);
router.route("/home").get(authController.home);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/forgotPassword").post(authController.forgotPassword);
router.route("/otpVerification").post(authController.otpVerification);
router.route("/changePassword").post(authController.changePassword);
// router.route("/auth/google").get(authController.googleCheck);
// router.route("/auth/google/").get(authController.googleLogin);
router.route("/contactus").post(authController.userContant);

module.exports = router;
