const Contact = require("../models/contactModel");
const handleContactFormSubmission = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const newContact = new Contact({
      name,
      email,
      message,
    });

    const contact = await newContact.save();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

module.exports = { handleContactFormSubmission };
