const mongoose = require("mongoose");

const RentalSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    companyName: {
      type: String,
    },
    machinery: {
      type: mongoose.Schema.ObjectId,
      ref: "Machinery",
    },
    duration:{
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Rental", RentalSchema);
