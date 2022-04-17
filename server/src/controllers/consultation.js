const axios = require("axios");
const Consultation = require("../models/Consultation");

exports.getAllConsultations = async (req, res, next) => {
  try {
    const result = await Consultation.find();
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getConsultation = async (req, res, next) => {
  try {
    const consultation = await Consultation.findById(req.params.id);
    if (!consultation) {
      res.status(404).json({
        status: "error",
        message: "Consultation with this ID does not exist",
      });
    }
    res.status(200).json({
      status: "success",
      consultation,
    });
  } catch (err) {}
};

exports.createConsultation = async (req, res, next) => {
  try {
    const consultation = await Consultation.create({
      ...req.body,
    });

    const response = axios
      .get(
        `https://api.telegram.org/bot5398015723:AAGm-u_lXvdlxYn81vog6MyHud9ll5m-ZSk/sendMessage?chat_id=-673176774&text=New Consultation Booked! \n\nApplicant name: ${req.body.applicantName} \n\nPhone number: ${req.body.phoneNumber} \n\nEmail: ${req.body.email} \n\nProject Name: ${req.body.projectName}\n\nProject Manager: ${req.body.projectManager}`
      )
      .then((res) => {
        console.log(res);
      });


    res.status(201).json({
      status: "success",
      consultation,
    });
    console.log("Created Successfully");
  } catch (err) {
    //TODO
    console.log(err);
  }
};

exports.updateConsultation = async (req, res, next) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!consultation) {
      res.status(404).json({
        status: "error",
        message: "Consultation with this ID does not exist",
      });
    }
    res.status(200).json({
      status: "success",
      consultation,
    });
  } catch (err) {
    //TODO
  }
};
exports.deleteConsultation = async (req, res, next) => {
  try {
    const consultation = await Consultation.findByIdAndDelete(req.params.id);
    if (!consultation) {
      res.status(404).json({
        status: "error",
        message: "Consultation with this ID does not exist",
      });
    }
    res.status(204).json({
      status: "success",
      consultation: null,
    });
  } catch (err) {
    //TODO
  }
};
