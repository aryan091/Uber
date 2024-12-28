const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema({
    fullname: {
      firstname: {
        type: String,
        required: true,
        minlength:[3, "First Name must be at least 3 characters long"],
      },
      lastname: {    
        type: String,
        required: true,
        minlength:[3, "Last Name must be at least 3 characters long"],
      },      
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match:[
           /^\S+@\S+\.\S+$/,
            "Please enter a valid email"],
        minlength: [3, "Email must be at least 3 characters long"],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: "inactive",
        enum: ["active", "inactive"],
    },
    vehicle: {
        vehicleName: {
            type: String,
            required: true,
            minlength:[3, "Vehicle Name must be at least 3 characters long"],
        },
        color: {
            type: String,
            required: true,
            minlength:[3, "Color must be at least 3 characters long"],
        },
        plate: {
            type: String,
            required: true,
            minlength:[3, "Color must be at least 3 characters long"],

        },
        capacity: {
            type: Number,
            required: true,
            min:[1, "Capacity must be at least 1 person"],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "moto","auto"],
        },
    },
    
    location: {
        ltd: {
          type: Number,
        },
        lng: {
          type: Number,
        },
      },
    },
    {
      timestamps: true, 
    }
  );
                

captainSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn: "24h"});
    return token;
  };

  captainSchema.methods.comparePassword = async function (password) {
    const isMatch = await bycrypt.compare(password, this.password);
    return isMatch;
  };
  
  captainSchema.statics.hashPassword = async function (password) {
    const salt = await bycrypt.genSalt(10);
    const hash = await bycrypt.hash(password, salt);
    return hash;
  };

const captainModel = mongoose.model("Captain", captainSchema);  
    
module.exports = captainModel;