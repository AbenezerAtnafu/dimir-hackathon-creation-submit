const axios = require("axios");

const Rental = require("../models/Rental");
const Machinery = require("../models/Machinery");

exports.getAllRentals = async (req, res, next) => {
  try {
    const result = await Rental.find().populate("machinery");
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getRental = async (req, res, next) => {
  try {
    const rental = await Rental.findById(req.params.id);
    if (!rental) {
      res.status(404).json({
        status: "error",
        message: "Rental with this ID does not exist",
      });
    }
    res.status(200).json({
      status: "success",
      rental,
    });
  } catch (err) {}
};

exports.createRental = async (req, res, next) => {
  try {
    const response = await Rental.create({
      ...req.body,
    });
    // const  response = await axios.get(
    //   `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage?chat_id=${process.env.TELEGRAM_CHAT_ID}&text=New Message received From Backend! \n\nFull Name: ${req.body.firstName} ${req.body.lastName} \n\nPhone number: ${req.body.phoneNumber} \n\nMessage: ${req.body.message}\n\nEmail: ${req.body.email}`
    // );

    // res.status(201).json({
    //   status: "success",
    //   rental,
    // });

    const machinery = await Machinery.findById(req.body.machinery);

    const tgResponse = axios
      .get(
        `https://api.telegram.org/bot5398015723:AAGm-u_lXvdlxYn81vog6MyHud9ll5m-ZSk/sendMessage?chat_id=-673176774&text=New Rental Request! \n\nApplicant name: ${req.body.fullName} \n\nPhone number: ${req.body.phoneNumber} \n\nCompany Name: ${req.body.companyName}\n\nMachinery name: ${machinery.name} \n\nMachinery model: ${machinery.model}`
      )
      .then((res) => {
        console.log(res);
      });

    req.rental = { ...response._doc, machinery };
    next();
  } catch (err) {
    //TODO
  }
};

exports.updateRental = async (req, res, next) => {
  try {
    const rental = await Rental.findByIdAndUpdate(req.params.id, req.body);
    if (!rental) {
      res.status(404).json({
        status: "error",
        message: "Rental with this ID does not exist",
      });
    }
    res.status(200).json({
      status: "success",
      rental,
    });
  } catch (err) {
    //TODO
  }
};
exports.deleteRental = async (req, res, next) => {
  try {
    const rental = await Rental.findByIdAndDelete(req.params.id);
    if (!rental) {
      res.status(404).json({
        status: "error",
        message: "Rental with this ID does not exist",
      });
    }
    res.status(204).json({
      status: "success",
      rental: null,
    });
  } catch (err) {
    //TODO
  }
};
