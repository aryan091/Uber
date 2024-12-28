const rideService = require("../services/ride.service");
const {validationResult} = require('express-validator');
const mapService = require("../services/maps.service");
const {sendMessageToSocketId} = require("../socket");
module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Validation errors: ", errors);
        return res.status(400).json({ errors: errors.array(), message: "Invalid data" });
    }

    try {
        const { pickup, destination, vehicleType } = req.body;

        // Create the ride
        const ride = await rideService.createRide({ user: req.user._id, pickup, destination, vehicleType });
        res.status(200).json(ride);

        // Get pickup coordinates
        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);
        if (!pickupCoordinates || pickupCoordinates.ltd == null || pickupCoordinates.lng == null) {
            console.error("Invalid coordinates for pickup:", pickupCoordinates);
            throw new Error("Invalid pickup coordinates");
        }
        console.log("Pickup Coordinates: ", pickupCoordinates);

        // Find captains within the radius
        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2);

        ride.otp = ""

        // Send notification to captains
        captainsInRadius.map( (captain) => {

            sendMessageToSocketId(captain.socketId, {
                event: "new-ride",
                data: ride
            });

        });

    } catch (error) {
        console.error("Error in createRide: ", error);
    }
};

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}