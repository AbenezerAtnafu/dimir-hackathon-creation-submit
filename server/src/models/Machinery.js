const mongoose = require("mongoose");

const MachinerySchema = mongoose.Schema(
  {
    image:{
      type:String,  
    },
    name: {
      type: String,
    },
    model: {
      type: String,
    },
    year: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    pricePerDay: {
      type: String,
    },
    currentlyAvailable: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Machinery", MachinerySchema);
