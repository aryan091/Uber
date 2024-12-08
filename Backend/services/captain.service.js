const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({firstname, lastname, email, password, vehicleName, color, plate, capacity, vehicleType}) => {
    if(!firstname || !lastname || !email || !password || !vehicleName || !color || !plate || !capacity || !vehicleType) throw new Error("All fields are required");
    const captain = await captainModel.create(
        { 
           fullname: {firstname, lastname}, 
           email, 
           password, 
           vehicle: {vehicleName, color, plate, capacity, vehicleType}
        }); 
    return captain;
}   