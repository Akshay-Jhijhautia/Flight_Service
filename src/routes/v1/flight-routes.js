const express = require("express");
const router = express.Router();

const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

router.post(
  "/",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

router.get("/all", FlightController.getAllFlightData);
router.get("/", FlightController.getAllFlights);

module.exports = router;
