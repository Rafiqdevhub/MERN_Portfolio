const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const dbConnection = require("./config/dbConnection");
const contactRoute = require("./routes/contactRoute");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
dbConnection();

const origin = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/contact", contactRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
