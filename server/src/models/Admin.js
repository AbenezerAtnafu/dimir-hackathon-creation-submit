const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdminSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
  },
});

AdminSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

AdminSchema.methods.createJWT = function () {
  return jwt.sign(
    { adminId: this._id, phoneNumber: this.phoneNumber },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE,
    }
  );
};

AdminSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("Admin", AdminSchema);
