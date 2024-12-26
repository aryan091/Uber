const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");

/**
 * @function getCoordinates
 * @description Express.js route handler to fetch geographical coordinates for a given address.
 * @param {Object} req - The request object, containing query parameters.
 * @param {Object} res - The response object used to send the JSON response.
 * @returns {void} Sends a JSON response with the coordinates or an error message.
 */

const getCoordinates = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
        const {address} = req.query;
    try {
        const coordinates = await mapsService.getAddressCoordinate(address);
        res.status(200).json({coordinates});
    } catch (error) {
        res.status(400).json({error: 'Unable to fetch coordinates'});
    }
}

const getDistanceTime = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
        const {origin, destination} = req.query;
        console.log(origin, destination);
    try {
        const distanceTime = await mapsService.getDistanceTime(origin, destination);
        console.log(distanceTime);
        res.status(200).json({distanceTime});
    } catch (error) {
        res.status(400).json({error: 'Unable to fetch distance and time'});
    }
}

const getAutoCompleteSuggestions = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
        const {input} = req.query;
    try {
        const suggestions = await mapsService.getAutoCompleteSuggestions(input);
        res.status(200).json({suggestions});
    } catch (error) {
        res.status(400).json({error: 'Unable to fetch suggestions'});
    }
}

module.exports = {getCoordinates , getDistanceTime , getAutoCompleteSuggestions};