const express = require("express");
const router = express.Router();

const { InfoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportroutes = require("./airport-routes");
const flightRoutes = require("./flight-routes");

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportroutes);
router.use("/flights", flightRoutes);

router.get("/info", InfoController.info);

module.exports = router;
