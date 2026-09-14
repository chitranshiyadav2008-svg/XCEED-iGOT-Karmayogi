const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authMiddleware = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const skillAssessmentRoutes = require("./routes/skillAssessmentRoutes");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Authentication routes
app.use("/api/auth", authRoutes);
app.use(
  "/api/skill-assessment",
  skillAssessmentRoutes
);
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

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error.message);
  });