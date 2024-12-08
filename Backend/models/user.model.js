const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { use } = require("../app");

const userSchema = new mongoose.Schema({
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

});

userSchema.methods.generateAuthToken = async function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET,{expiresIn: "24h"});
    return token;
  };

userSchema.methods.comparePassword = async function (password) {
  const isMatch = await bycrypt.compare(password, this.password);
  return isMatch;
};

userSchema.statics.hashPassword = async function (password) {
  const salt = await bycrypt.genSalt(10);
  const hash = await bycrypt.hash(password, salt);
  return hash;
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
