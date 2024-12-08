const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service"); 
const {validationResult} = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");

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

module.exports.loginCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {email, password} = req.body;
       
        const captain = await captainModel.findOne({ email }).select("+password");
        if (!captain) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const token = await captain.generateAuthToken();
        res.cookie("token", token);
        res.status(200).json({ token, captain });
    } catch (error)
    {
        res.status(400).json({error: error.message})
    }
}

module.exports.getCaptainProfile = async (req, res) => {
    try {
        const captain = req.captain;
        res.status(200).json({captain});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports.logoutCaptain = async (req, res) => {
    try {   
        const token = req.headers?.authorization?.split(' ')[1] || req.cookies.token;
        await blacklistTokenModel.create({token});
        
        res.clearCookie("token");
        res.status(200).json({ message: "Logout successful" });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
