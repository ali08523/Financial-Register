const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create Schema & Model
const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const FormData = mongoose.model("FormData", FormDataSchema);

// API Route to Handle Form Submission
app.post("/submit", async (req, res) => {
  try {
    const newData = new FormData(req.body);
    await newData.save();
    res.status(201).json({ message: "Data Saved Successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving data" });
  }
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
