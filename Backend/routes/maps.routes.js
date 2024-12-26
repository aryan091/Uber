const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const {query} = require("express-validator");
const {getCoordinates , getDistanceTime} = require("../controllers/map.controller");
router.get("/get-coordinates", query("address").isLength({min:3}).withMessage("Address must be at least 3 characters long") ,authMiddleware.authUser, getCoordinates);

router.get("/get-distance-time",
    query("origin").isLength({min:3}).withMessage("Origin must be at least 3 characters long"),
    query("destination").isLength({min:3}).withMessage("Destination must be at least 3 characters long"),
    authMiddleware.authUser,
    getDistanceTime
)



module.exports = router;