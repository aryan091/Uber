const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service"); 
const {validationResult} = require("express-validator");


module.exports.registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {fullname, email, password, vehicle} = req.body;

        const isCaptainAlreadyExists = await captainModel.findOne({email});
        if (isCaptainAlreadyExists) {
            return res.status(400).json({error: "Captain already exists"});
        }
        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await captainService.createCaptain({

            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            vehicleName: vehicle.vehicleName,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });

        const token = await captain.generateAuthToken();
        res.status(201).json({token, captain});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};