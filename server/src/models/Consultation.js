const mongoose = require("mongoose");

const ConsultationSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    projectName: {
      type: String,
    },
    projectManager: {
      type: String,
    },
    location: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    applicantName: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Consultation", ConsultationSchema);
