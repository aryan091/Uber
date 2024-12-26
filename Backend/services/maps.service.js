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

/**
 * @function getAutoCompleteSuggestions
 * @description Get autocomplete suggestions for a given query from Google Place API.
 * @param {string} address The query to get suggestions for.
 * @returns {Promise<Array<Object>>} A promise that resolves with an array of prediction objects.
 * @throws {Error} If the API call fails or the query is invalid.
 */

// {
//     "suggestions": [
//         {
//             "description": "Jagraon, Punjab, India",
//             "matched_substrings": [
//                 {
//                     "length": 3,
//                     "offset": 0
//                 }
//             ],
//             "place_id": "ChIJVzJqmpudEDkRfcknwGKcOt8",
//             "reference": "ChIJVzJqmpudEDkRfcknwGKcOt8",
//             "structured_formatting": {
//                 "main_text": "Jagraon",
//                 "main_text_matched_substrings": [
//                     {
//                         "length": 3,
//                         "offset": 0
//                     }
//                 ],
//                 "secondary_text": "Punjab, India"
//             },
//             "terms": [
//                 {
//                     "offset": 0,
//                     "value": "Jagraon"
//                 },
//                 {
//                     "offset": 9,
//                     "value": "Punjab"
//                 },
//                 {
//                     "offset": 17,
//                     "value": "India"
//                 }
//             ],
//             "types": [
//                 "geocode",
//                 "political",
//                 "locality"
//             ]
//         },
//         {
//             "description": "Jagadhri, Haryana, India",
//             "matched_substrings": [
//                 {
//                     "length": 3,
//                     "offset": 0
//                 }
//             ],
//             "place_id": "ChIJ69DAPe77DjkR0kfnMwLFBfE",
//             "reference": "ChIJ69DAPe77DjkR0kfnMwLFBfE",
//             "structured_formatting": {
//                 "main_text": "Jagadhri",
//                 "main_text_matched_substrings": [
//                     {
//                         "length": 3,
//                         "offset": 0
//                     }
//                 ],
//                 "secondary_text": "Haryana, India"
//             },
//             "terms": [
//                 {
//                     "offset": 0,
//                     "value": "Jagadhri"
//                 },
//                 {
//                     "offset": 10,
//                     "value": "Haryana"
//                 },
//                 {
//                     "offset": 19,
//                     "value": "India"
//                 }
//             ],
//             "types": [
//                 "political",
//                 "locality",
//                 "geocode"
//             ]
//         },
//         {
//             "description": "Jagdalpur, Chhattisgarh, India",
//             "matched_substrings": [
//                 {
//                     "length": 3,
//                     "offset": 0
//                 }
//             ],
//             "place_id": "ChIJ62uuxWsSMDoRpyuVEKzU5Mo",
//             "reference": "ChIJ62uuxWsSMDoRpyuVEKzU5Mo",
//             "structured_formatting": {
//                 "main_text": "Jagdalpur",
//                 "main_text_matched_substrings": [
//                     {
//                         "length": 3,
//                         "offset": 0
//                     }
//                 ],
//                 "secondary_text": "Chhattisgarh, India"
//             },
//             "terms": [
//                 {
//                     "offset": 0,
//                     "value": "Jagdalpur"
//                 },
//                 {
//                     "offset": 11,
//                     "value": "Chhattisgarh"
//                 },
//                 {
//                     "offset": 25,
//                     "value": "India"
//                 }
//             ],
//             "types": [
//                 "geocode",
//                 "political",
//                 "locality"
//             ]
//         },
//         {
//             "description": "Jageshwar Dham, Uttarakhand, India",
//             "matched_substrings": [
//                 {
//                     "length": 3,
//                     "offset": 0
//                 }
//             ],
//             "place_id": "ChIJ3y-Lb-fOoDkRhphMrdfytQw",
//             "reference": "ChIJ3y-Lb-fOoDkRhphMrdfytQw",
//             "structured_formatting": {
//                 "main_text": "Jageshwar Dham",
//                 "main_text_matched_substrings": [
//                     {
//                         "length": 3,
//                         "offset": 0
//                     }
//                 ],
//                 "secondary_text": "Uttarakhand, India"
//             },
//             "terms": [
//                 {
//                     "offset": 0,
//                     "value": "Jageshwar Dham"
//                 },
//                 {
//                     "offset": 16,
//                     "value": "Uttarakhand"
//                 },
//                 {
//                     "offset": 29,
//                     "value": "India"
//                 }
//             ],
//             "types": [
//                 "political",
//                 "locality",
//                 "geocode"
//             ]
//         },
//         {
//             "description": "Jagtial, Telangana, India",
//             "matched_substrings": [
//                 {
//                     "length": 3,
//                     "offset": 0
//                 }
//             ],
//             "place_id": "ChIJcQeEToUTzTsRlbg8DHlsw9Q",
//             "reference": "ChIJcQeEToUTzTsRlbg8DHlsw9Q",
//             "structured_formatting": {
//                 "main_text": "Jagtial",
//                 "main_text_matched_substrings": [
//                     {
//                         "length": 3,
//                         "offset": 0
//                     }
//                 ],
//                 "secondary_text": "Telangana, India"
//             },
//             "terms": [
//                 {
//                     "offset": 0,
//                     "value": "Jagtial"
//                 },
//                 {
//                     "offset": 9,
//                     "value": "Telangana"
//                 },
//                 {
//                     "offset": 20,
//                     "value": "India"
//                 }
//             ],
//             "types": [
//                 "geocode",
//                 "political",
//                 "locality"
//             ]
//         }
//     ]
// }
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