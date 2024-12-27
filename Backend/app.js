const dotenv = require("dotenv");

dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();
const cookieParser = require("cookie-parser");
const connectDB = require("./db/db");
const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");
const mapRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/rides.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapRoutes);
app.use("/rides", rideRoutes);

module.exports = app;