const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user.controller");

router.post("/register",[ body("email").isEmail().withMessage("Please enter a valid email"),body("fullname.firstname").isLength({min:3}).withMessage("First Name must be at least 3 characters long"),body("fullname.lastname").isLength({min:3}).withMessage("Last Name must be at least 3 characters long"),body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long")],userController.register); 

router.post("/login",[
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long")
],userController.login);

module.exports = router;