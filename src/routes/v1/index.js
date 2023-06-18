const express = require("express");
const router = express.Router();

const { InfoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportroutes = require("./airport-routes");

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportroutes);

router.get("/info", InfoController.info);

module.exports = router;
