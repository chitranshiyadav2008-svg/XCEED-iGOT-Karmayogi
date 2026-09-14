const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  });

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SkillSaarthi backend is running!"
  });
});

// Onboarding API
app.post("/api/onboarding", (req, res) => {
  const {
    employeeId,
    primaryArea,
    responsibilities,
    strengthAreas
  } = req.body;

  console.log("Onboarding data received:");
  console.log(req.body);

  res.json({
    success: true,
    message: "Onboarding data received successfully.",
    data: {
      employeeId,
      primaryArea,
      responsibilities,
      strengthAreas
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});