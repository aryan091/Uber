const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const {validationResult} = require("express-validator");
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