const axios = require('axios');
/**
 * @function getAddressCoordinate
 * @description Get the coordinates of a given address.
 * @param {string} address The address to get the coordinates for.
 * @returns {Promise<Object>} A promise that resolves with an object containing the latitude and longitude of the given address.
 * @throws {Error} If the API call fails or the address is invalid.
 */
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