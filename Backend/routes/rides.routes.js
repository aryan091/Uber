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
    body("vehicleType").isIn(['car', 'moto', 'auto']).withMessage("Vehicle type must be car, moto or auto")
    
] , rideController.createRide);

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    rideController.getFare
)

router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide
)

router.get('/start-ride',
    authMiddleware.authCaptain,
    query('rideId').isMongoId().withMessage('Invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    rideController.startRide
)

router.post('/end-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.endRide
)

module.exports = router;