const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");
module.exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {fullname, email, password} = req.body;
const hashedPassword = await userModel.hashPassword(password);
         
        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });
        const token = await user.generateAuthToken();
        res.status(201).json({ token , user }); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 

module.exports.login = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {email, password} = req.body;
        const existingUser = await userModel.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ error: "User Already Exists" });
        }
        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        const token = await user.generateAuthToken();
        res.cookie("token", token);
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.getUserProfile = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } 
    try {
        const user = req.user;
        res.status(200).json({ user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports.logout = async (req, res) => {
    
    try {
        res.clearCookie("token");
        const token = req.headers?.authorization?.split(' ')[1] || req.cookies.token;

        await blacklistTokenModel.create({token});
        res.status(200).json({ message: "Logout successful" });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};