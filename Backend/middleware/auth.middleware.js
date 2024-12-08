const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bycrypt = require("bcryptjs");
const { model } = require("mongoose");

module.exports.authUser = async (req, res, next) => {
    try {
        const token = req.headers?.authorization?.split(' ')[1] || req.cookies.token;

        if(!token)
        {
            return res.status(401).json({error: "Unauthorized"});
        }

        const isBlacklisted = await userModel.findOne({token: token});

        if(isBlacklisted)
        {
            return res.status(401).json({error: "Unauthorized"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({error: "Unauthorized"});
    }
}