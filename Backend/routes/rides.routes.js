const express = require("express");
const router = express.Router();
const { body , query} = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middleware/auth.middleware");


router.post("/create",
    authMiddleware.authUser,
     [
    body("pickup").isLength({ min: 3 }).withMessage("Source must be at least 3 characters long"),
    body("destination").isLength({ min: 3 }).withMessage("Destination must be at least 3 characters long"),
    body("vehicleType").isIn(['car', 'moto', 'auto']).withMessage("Vehicle type must be car, motorcycle or auto"),
    
] , rideController.createRide);

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    rideController.getFare
)

module.exports = router;