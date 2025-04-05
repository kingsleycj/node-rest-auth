const express = require("express")
const route = express.Router();
const authRoute = require("./auth.route")



route.use("/", authRoute)


module.exports = route;
