const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const captainController = require("../controllers/captain.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register",[ body("email").isEmail().withMessage("Please enter a valid email"),body("fullname.firstname").isLength({min:3}).withMessage("First Name must be at least 3 characters long"),body("fullname.lastname").isLength({min:3}).withMessage("Last Name must be at least 3 characters long"),body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
body('vehicle.vehicleName').isLength({min:3}).withMessage("Vehicle Name must be at least 3 characters long"),
body('vehicle.color').isLength({min:3}).withMessage("Vehicle Color must be at least 3 characters long"),
body('vehicle.plate').isLength({min:3}).withMessage("Vehicle plate must be at least 3 characters long"),
body('vehicle.capacity').isNumeric().withMessage("Capacity must be a number"),
body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage("Vehicle type must be car, motorcycle or auto")],captainController.registerCaptain);

router.post("/login",[
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long")
],captainController.loginCaptain);


router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);
module.exports = router;

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);