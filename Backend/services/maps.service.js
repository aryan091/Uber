const axios = require('axios');
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
            lat: location.lat,
            lng: location.lng
        }

    } catch (error) {
        throw new Error(error.message);
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
        console.log(error);
        throw new Error("Unable to fetch distance and time");
    }
}