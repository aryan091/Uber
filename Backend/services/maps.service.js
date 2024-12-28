const axios = require('axios');
const captainModel = require("../models/captain.model");
/**
 * @function getAddressCoordinate
 * @description Get the coordinates of a given address.
 * @param {string} address The address to get the coordinates for.
 * @returns {Promise<Object>} A promise that resolves with an object containing the latitude and longitude of the given address.
 * @throws {Error} If the API call fails or the address is invalid.
 */

// {
//     "coordinates": {
//         "lat": 32.8179468,
//         "lng": 74.90729
//     }
// }
module.exports.getAddressCoordinate = async (address) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`);

        if(response.data.status !== "OK") throw new Error("Unable to fetch coordinates");

        const location = response.data.results[0].geometry.location;
        return{
            ltd: location.lat,
            lng: location.lng
        }

    } catch (error) {
        throw new Error("Unable to fetch coordinates");
    }
}


/**
 * @function getDistanceTime
 * @description Get the distance and duration between two points using the Google Maps API.
 * @param {string} origin The starting point of the journey.
 * @param {string} destination The destination of the journey.
 * @returns {Promise<Object>} A promise that resolves with an object containing the distance and duration of the journey.
 * @throws {Error} If the API call fails or either the origin or destination are invalid.
 */

// {
//     "distanceTime": {
//         "distance": {
//             "text": "233 km",
//             "value": 232553
//         },
//         "duration": {
//             "text": "5 hours 23 mins",
//             "value": 19390
//         },
//         "status": "OK"
//     }
// }

module.exports.getDistanceTime = async (origin, destination) => {

    if(!origin || !destination) throw new Error("Origin and destination are required");

    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.GOOGLE_MAPS_API_KEY}`);

        if(response.data.status !== "OK") throw new Error("Unable to fetch distance and time");

        return response.data.rows[0].elements[0];
    } catch (error) {
        throw new Error("Unable to fetch distance and time");
    }
}

/**
 * @function getAutoCompleteSuggestions
 * @description Get autocomplete suggestions for a given query from Google Place API.
 * @param {string} address The query to get suggestions for.
 * @returns {Promise<Array<Object>>} A promise that resolves with an array of prediction objects.
 * @throws {Error} If the API call fails or the query is invalid.
 */


module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input) throw new Error("Query is required");
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${process.env.GOOGLE_MAPS_API_KEY}`);

        if(response.data.status !== "OK") throw new Error("Unable to fetch suggestions");

        return response.data.predictions;
    } catch (error) {
        throw new Error("Unable to fetch suggestions");
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    try {
      const captains = await captainModel.find({
        location: {
          $geoWithin: {
            $centerSphere: [[lng, ltd], 6000 / 6378.1], // Note: Order is [longitude, latitude]
          },
        },
      });
  
      console.log("Captains found: ", captains);
      return captains;
    } catch (error) {
      console.error("Error finding captains in radius:", error);
      throw new Error("Failed to find captains in the specified radius");
    }
  };