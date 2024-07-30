const express = require("express");
const { handleContactFormSubmission } = require("../controllers/contact");
const router = express.Router();

router.post("/", handleContactFormSubmission);

module.exports = router;
