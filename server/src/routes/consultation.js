const express = require("express");
const consultationController = require("../controllers/consultation");

const router = express.Router();

router
  .route("/")
  .get(consultationController.getAllConsultations)
  .post(consultationController.createConsultation);

router
  .route("/:id")
  .get(consultationController.getConsultation)
  .patch(consultationController.updateConsultation)
  .delete(consultationController.deleteConsultation);

module.exports = router;
