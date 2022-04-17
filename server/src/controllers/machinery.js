const path = require("path");
const multer = require("multer");
const { nanoid } = require("nanoid");
const Machinery = require("../models/Machinery");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/machinery"));
  },
  filename: function (req, file, cb) {
    cb(null, `machine-${nanoid()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

/**
 * Upload Middleware
 */
exports.uploadImage = upload.single("image");

exports.createMachinery = async (req, res, next) => {
  try {
    console.log(req);
    if (req.file) {
      req.body.image = req.file.filename;
    }
    const machinery = await Machinery.create({
      ...req.body,
    });

    res.status(201).json({
      status: "success",
      machinery,
    });
  } catch (err) {
    //TODO
  }
};
exports.getAllMachineries = async (req, res, next) => {
  try {
    const options = {
      page: req.query.page * 1 || 1,
      limit: req.query.limit * 1 || 10,
      sort: "-createdAt",
    };

    const result = await Machinery.find();
    res.status(200).json({
      status: "success",
      result,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.getMachinery = async (req, res) => {
  try {
    const machinery = await Machinery.findById(req.params.id);
    if (!machinery) {
      res.status(404).json({
        status: "error",
        message: "machinery with this ID does not exist",
      });
    }
    res.status(200).json({
      status: "success",
      machinery,
    });
  } catch (err) {}
};

exports.updateMachinery = async (req, res) => {
  try {
    const machinery = await Machinery.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!machinery) {
      res.status(404).json({
        status: "error",
        message: "Machinery  with this ID does not exist",
      });
    }
    res.status(200).json({
      status: "success",
      machinery,
    });
  } catch (err) {
    //TODO
  }
};

exports.deleteMachinery = async (req, res) => {
  try {
    const machinery = await Machinery.findByIdAndDelete(req.params.id);
    if (!machinery) {
      res.status(404).json({
        status: "error",
        message: "Machinery with this ID does not exist",
      });
    }
    res.status(204).json({
      status: "success",
      machinery: null,
    });
  } catch (err) {
    //TODO
  }
};
