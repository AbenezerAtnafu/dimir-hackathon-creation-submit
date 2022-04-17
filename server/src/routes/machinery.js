const express = require("express");
const machineryController = require("../controllers/machinery");


const router = express.Router();

router
  .route("/")
  .get(machineryController.getAllMachineries)
  .post(machineryController.uploadImage, machineryController.createMachinery);

router
  .route("/:id")
  .get(machineryController.getMachinery)
  .patch(machineryController.updateMachinery)
  .delete(machineryController.deleteMachinery);

module.exports = router;
