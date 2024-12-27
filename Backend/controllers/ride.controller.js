const rideService = require("../services/ride.service");
const {validationResult} = require('express-validator');
module.exports.createRide = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("errors :",errors);
        return res.status(400).json({ errors: errors.array() , message: "Invalid data"});
    }   
    try {
        const {user, pickup, destination, vehicleType} = req.body;
        const newRide = await rideService.createRide({user:req.user._id, pickup, destination, vehicleType}); 
        return res.status(200).json(newRide);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}