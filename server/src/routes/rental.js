const express = require("express");
const rentalController = require("../controllers/rental");
const sendWelcomeSms = require("../middleware/sms");

const router = express.Router();

router
  .route("/")
  .get(rentalController.getAllRentals)
  .post(rentalController.createRental, sendWelcomeSms());

router
  .route("/:id")
  .get(rentalController.getRental)
  .patch(rentalController.updateRental)
  .delete(rentalController.deleteRental);

module.exports = router;
