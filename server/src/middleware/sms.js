const axios = require("axios");
const sendWelcomeSms = () => async (req, res, next) => {
  const response = await axios.get(`${process.env.SMS_URL}/send`, {
    params: {
      key: process.env.SMS_API_KEY,
      phone: req.body.phoneNumber,
      message: `Dear ${req.body.fullName}, we have received your request successfully. Your rental request is in process. We will contact you as soon as possible. Thanks for choosing us. \n\nWith regards \nEshi Construction`,
      device: 43,
    },
  });

  res.status(201).json({ status: "success", result: req.rental });

};

module.exports = sendWelcomeSms;
