const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const {query} = require("express-validator");
const {getCoordinates} = require("../controllers/map.controller");
router.get("/get-coordinates", query("address").isLength({min:3}).withMessage("Address must be at least 3 characters long") ,authMiddleware.authUser, getCoordinates);

module.exports = router;